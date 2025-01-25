<script lang="ts">
	import { getPosts } from '$lib/functions/calls';
	import { createQuery } from '@tanstack/svelte-query';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { formatRelative, format } from 'date-fns';
	import { generateExcerpt } from '$lib/functions/util';

	let pagecount = 1;
	let limit = 4;

	const data = createQuery({
		queryKey: ['blogs', { page: pagecount, limit }],
		queryFn: async () => await getPosts({ page: pagecount, limit })
	});

	function nextPage() {
		pagecount += 1;
		$data.refetch();
	}

	function prevPage() {
		if (pagecount > 1) {
			pagecount -= 1;
			$data.refetch();
		}
	}
</script>

<div class="space-y-6">
	{#if $data.isFetching}
		<p>Loading...</p>
	{:else if $data.error}
		<p>Error: {$data.error.message}</p>
	{:else if $data.data?.blogs?.length === 0}
		<p>No blog posts found.</p>
	{:else if $data.data?.blogs}
		{#each $data.data.blogs as blog}
			<div class="rounded-lg bg-gray-600 p-6 shadow">
				<h2 class="text-xl font-bold">{blog.title}</h2>
				<p class="text-white">
					by {blog.author_email} ,posted {formatRelative(new Date(blog.created_at), new Date())}
				</p>
				<p class="py-4 text-sm text-white">{generateExcerpt(blog.content)}</p>
				<a href="/" class="text-blue-300 hover:text-blue-700">Read more...</a>
			</div>
		{/each}
	{/if}

	{#if !$data.isFetching}
		<nav
			class="fixed bottom-5 left-1/2 flex w-full max-w-md -translate-x-1/2 transform items-center justify-between px-4"
		>
			<button
				onclick={prevPage}
				class="rounded-md px-1.5 py-1 ring ring-white disabled:opacity-40"
				disabled={pagecount <= 1}
			>
				<ChevronLeft />
			</button>
			<p>Page {pagecount} of {Math.round(($data.data?.total as number) / 4)}</p>
			<button
				onclick={nextPage}
				class="rounded-md px-1.5 py-1 ring ring-white disabled:opacity-40"
				disabled={pagecount >= Math.round(($data.data?.total as number) / 4)}
			>
				<ChevronRight />
			</button>
		</nav>
	{/if}
</div>
