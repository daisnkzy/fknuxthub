<script setup>
defineProps({
	comment: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		default: "Anonymous",
	},
	position: {
		type: String,
	},
	avatarUrl: {
		type: String,
		default: "https://i.pravatar.cc/150?img=52",
	},
});
</script>

<template>
	<div class="break-inside-avoid">
		<UCard class="border-none shadow-sm ring-0">
			<p class="mb-8 text-base font-light text-cool-600 dark:text-cool-300">
				{{ comment }}
			</p>
			<div class="flex items-center gap-x-1">
				<span
					class="relative inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-base rounded-full"
				>
					<UAvatar :src="avatarUrl" alt="smarroufin" loading="lazy" size="sm" />
				</span>
				<div>
					<p class="text-sm font-medium text-cool-600 dark:text-cool-300">
						{{ name }}
					</p>

					<p class="text-xs text-gray-500">{{ position }}</p>
				</div>
			</div>
		</UCard>
	</div>
</template>
