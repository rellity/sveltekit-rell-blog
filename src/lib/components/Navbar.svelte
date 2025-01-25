<script>
	import { Book, BookOpen, UserRound } from 'lucide-svelte';
	let isOpen = $state(false);
	let isDropdownOpen = $state(false);

	function toggleNavbar() {
		isOpen = !isOpen;
	}

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}

	let user = $props();
</script>

<nav class="bg-gray-800 py-4">
	<div class="mx-4 flex items-center justify-between">
		<div class="flex flex-row items-center space-x-2">
			<Book class="h-8 w-8 fill-current text-white" />
			<a href="/" class="text-xl font-bold text-white">rell's blog (svelte remake)</a>
		</div>
		<div class="relative">
			<button class="flex items-center text-white focus:outline-none" onclick={toggleDropdown}>
				<UserRound class="h-6 w-6 rounded-full bg-white p-1 text-black" />
			</button>
			{#if isDropdownOpen}
				<div class="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
					<a href="/profile" class="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Profile </a>
					<a href="/settings" class="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Settings </a>
					<a href="/logout" class="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Logout </a>
				</div>
			{/if}
		</div>
	</div>
</nav>
