export type BlogData = {
    blogs: Blog[];
    total: number;
    page: number;
    itemsPerPage: number;
}

export type Blog = {
    id: number;
    title: string;
    author_email: string;
    content: string;
    created_at: string;
    updated_at: string;
}