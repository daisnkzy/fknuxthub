<script setup>
const mobileSidebar = useState("mobileSidebar");
</script>

<template>
	<div class="p-4 overflow-y-auto grow lg:p-10">
		<div class="flex items-center gap-2">
			<UButton
				icon="i-solar-list-line-duotone"
				square
				color="gray"
				variant="ghost"
				class="lg:hidden"
				size="xl"
				@click="mobileSidebar = !mobileSidebar"
			/>
		</div>

		<div class="mt-4 sm:mt-8">
			<slot />
		</div>
	</div>
</template>
