import { supabase } from "$lib/server/supabaseServer";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
    const page = parseInt(url.searchParams.get('page') || '1');
    const itemsPerPage = 4;
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    const { data: blogs, error } = await supabase
        .from('blogs')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to);

    if (error) {
        return {
            status: 500,
            error: error.message
        }
    }

    const { count: total } = await supabase
        .from('blogs')
        .select('*', { count: 'exact' });

    return {
        status: 200,
        blogs: blogs || [],
        total: total || 0,
        page,
        itemsPerPage
    }
};