<script lang="ts">
	import '../app.css';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<Navbar />
	{@render children()}
</QueryClientProvider>
