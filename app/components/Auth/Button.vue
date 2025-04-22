<script setup>
const loading = ref(false);
const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
	path: {
		type: String,
		required: true,
	},
});

function open() {
	loading.value = true;
	window.location.href = props.path;
}
</script>

<template>
	<UButton
		@click="open"
		:loading="loading"
		:disabled="loading"
		external
		block
		color="gray"
		size="lg"
		:icon="icon"
		class="text-cool-950/70"
	>
		{{ label }}
	</UButton>
</template>
