<script setup>
import { toast } from "vue-sonner";

// definePageMeta({
// 	layout: "dashboard",
// 	colorMode: "dark",
// });

function onClick() {
	toast.success("Hi, taosir@150.com", {
		description:
			"We've added you to our waitlist. We'll let you konw when xxx is ready.",
	});
}
</script>

<template>
	<section class="flex flex-col items-center justify-center h-screen gap-y-8">
		<div class="flex flex-col items-center gap-y-2">
			<div
				class="w-40 h-[0.7px] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
			></div>
			<p class="text-xs font-light text-gray-500">
				StartEase | SaaS Boilerplate
			</p>
		</div>

		<div class="text-4xl font-light leading-snug text-center">
			<div class="relative">
				<p>Join the Waitlist for</p>
				<div
					class="absolute inset-x-0 h-12 mx-auto max-w-2xl pointer-events-none select-none -bottom-2 bg-gradient-to-t dark:dark:from-[#14141466] to-transparent"
				></div>
			</div>
			<p
				class="text-transparent bg-gradient-to-r dark:via-primary-400 dark:to-primary-500 bg-clip-text dark:from-white via-primary-600 to-primary-700 from-primary-400"
			>
				the Ease web Startup Shipping
			</p>
		</div>

		<HomeBroadcast />
		<button class="text-sm font-light hover:underline" @click="onClick">
			test notification
		</button>

		<div class="flex items-center mt-20 text-sm font-light gap-x-48">
			<div class="flex flex-col items-center gap-y-6">
				<div
					class="w-20 h-[0.5px] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
				></div>
				<div class="flex items-center justify-between cursor-pointer gap-x-4">
					<UIcon name="i-skill-icons-twitter" class="size-7"></UIcon>
					<div class="space-y-1 text-xs text-left">
						<p class="text-gray-700 dark:text-gray-200">Twitter</p>
						<p class="text-gray-500">@daisnkzy</p>
					</div>
				</div>
			</div>

			<div class="flex flex-col items-center gap-y-6">
				<div
					class="w-20 h-[0.5px] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
				></div>
				<div class="flex items-center justify-between cursor-pointer gap-x-4">
					<UIcon name="i-skill-icons-discord" class="size-7"></UIcon>
					<div class="space-y-1 text-xs text-left">
						<p class="text-gray-700 dark:text-gray-200">Discord</p>
						<p class="text-gray-500">@daisnkzy</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
