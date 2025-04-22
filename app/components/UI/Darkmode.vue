<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
	get() {
		return colorMode.value === "dark";
	},
	set() {
		colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
	},
});
</script>

<template>
	<ClientOnly>
		<UButton
			:icon="isDark ? 'i-solar-moon-bold' : 'i-solar-sun-2-bold'"
			color="gray"
			size="sm"
			variant="ghost"
			@click="isDark = !isDark"
		/>

		<template #fallback>
			<div class="size-8" />
		</template>
	</ClientOnly>
</template>
