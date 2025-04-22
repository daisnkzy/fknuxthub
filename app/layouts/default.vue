<template>
	<main id="default" class="relative flex flex-col w-full min-h-screen">
		<Navbar />
		<slot />
		<Footer />
	</main>
</template>

<style>
#default {
	@apply bg-white dark:bg-[#08090a];
}
</style>
