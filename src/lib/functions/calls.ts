import { supabase } from '$lib/supabaseClient';
import type { Blog } from '$lib/types';

export const getPosts = async ({ page, limit }: { page: number, limit: number }): Promise<{
    blogs: Blog[],
    total: number,
    status?: number,
    error?: string
}> => {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data: blogs, error } = await supabase
        .from('blogs')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to);

    if (error) {
        return {
            status: 500,
            error: error.message,
            blogs: [],
            total: 0
        }
    }

    const { count: total } = await supabase
        .from('blogs')
        .select('*', { count: 'exact' });

    return {
        blogs: blogs || [],
        total: total || 0,
    }
};