<template>
	<NuxtLoadingIndicator color="#000" />
	<Toaster position="top-center" richColors />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
import { Toaster } from "vue-sonner";

useSeoMeta({
	titleTemplate: "%s",
});
</script>
