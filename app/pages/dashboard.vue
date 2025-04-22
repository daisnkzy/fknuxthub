<script setup>
definePageMeta({
	middleware: "auth",
	layout: "dashboard",
});
</script>

<template>
	<div class="fixed inset-0 flex overflow-hidden bg-white dark:bg-slate-900">
		<AppSidebar />

		<div class="flex flex-1 w-full min-w-0">
			<div class="relative flex flex-col items-stretch flex-1 w-full">
				<NuxtPage />
			</div>
		</div>
	</div>
</template>
