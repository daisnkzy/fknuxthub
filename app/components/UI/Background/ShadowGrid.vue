<script setup></script>

<template>
	<!-- <img
		src="/images/shadow.png"
		alt="Hero"
		class="absolute top-0 left-0 z-0 w-full h-full opacity-60 dark:invert"
	/> -->
	<div class="fixed w-screen h-screen base-grid opacity-40" />
	<div
		class="fixed bottom-0 w-screen h-screen bg-gradient-to-t from-white dark:from-black to-transparent"
	/>
</template>

<style>
.base-grid {
	@apply will-change-auto;

	background-size: 70px 70px;
	background-image: linear-gradient(90deg, var(--grid-color) 1px, transparent 0),
		linear-gradient(180deg, var(--grid-color) 1px, transparent 0);
}

:root {
	--grid-color: rgba(0, 0, 0, 0.1);
}

.dark {
	--grid-color: rgba(255, 255, 255, 0.2);
}
</style>
