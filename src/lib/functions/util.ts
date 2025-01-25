export function generateExcerpt(blogPost: string, wordLimit = 12) {
    const words = blogPost.split(' ');

    if (words.length <= wordLimit) {
        return blogPost;
    }

    return words.slice(0, wordLimit).join(' ') + '...';
}