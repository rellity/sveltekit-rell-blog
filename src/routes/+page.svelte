<script lang="ts">
	import type { BlogData } from '$lib/types';

	export let data: BlogData;
</script>

<main>
	<h1>Blog Posts</h1>

	{#each data.blogs as blog}
		<article>
			<h2>{blog.title}</h2>
			<p>{blog.content}</p>
		</article>
	{/each}
	<p>Total Blogs: {data.total}</p>

	<nav>
		{#if data.page > 1}
			<a href="?page={data.page - 1}">Previous</a>
		{/if}
		{#if data.page * data.itemsPerPage < data.total}
			<a href="?page={data.page + 1}">Next</a>
		{/if}
	</nav>
</main>
