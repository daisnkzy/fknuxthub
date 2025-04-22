<script setup>
const { title, description } = defineProps({
	title: String,
	description: String,
});

const lightImage = "/images/light-img.png";
const darkImage = "/images/dark-img.png";
</script>

<template>
	<section class="z-10 py-16 lg:pt-24">
		<UIAvatarGroup />
		<UContainer class="text-center">
			<div class="relative">
				<h1
					class="max-w-4xl mx-auto mb-6 text-3xl font-semibold tracking-tight font-display text-cool-900 dark:text-cool-100 sm:text-6xl"
				>
					{{ title }}
				</h1>
				<div
					class="absolute inset-x-0 h-8 mx-auto max-w-2xl pointer-events-none select-none -bottom-2 bg-gradient-to-t dark:dark:from-[#14141466] to-transparent"
				></div>
			</div>

			<p
				class="max-w-2xl mx-auto mb-8 text-base font-light md:text-lg text-cool-700 dark:text-cool-200"
			>
				{{ description }}
			</p>

			<div class="flex justify-center mb-4 gap-x-6">
				<UButton size="xl" to="auth/login">Get started for free</UButton>
				<UButton size="xl" variant="ghost">Watch video</UButton>
			</div>

			<div class="relative items-center w-full max-w-5xl py-12 pb-12 mx-auto">
				<div
					class="p-2 overflow-hidden bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-3xl"
				>
					<img
						:src="lightImage"
						alt="image"
						loading="lazy"
						class="relative object-cover w-full rounded shadow-2xl lg:rounded-2xl dark:hidden"
					/>
					<img
						:src="darkImage"
						alt="image"
						loading="lazy"
						class="relative hidden object-cover w-full rounded shadow-2xl lg:rounded-2xl dark:block"
					/>
				</div>
			</div>
		</UContainer>
	</section>
</template>
