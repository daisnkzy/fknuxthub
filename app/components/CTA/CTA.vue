<script setup></script>

<template>
	<section class="py-16 bg-black bg-cool-900 dark:bg-cool-950">
		<UContainer>
			<div class="flex flex-col items-center justify-center mt-20 gap-y-8">
				<h2
					class="mx-auto text-5xl font-bold leading-tight text-center text-cool-100"
				>
					Start Your Journey Today
				</h2>

				<div class="flex gap-4">
					<UButton color="primary" variant="solid" size="md" to="/auth/login">
						Start for Free
					</UButton>
					<UButton color="white" variant="solid" size="md">
						Get a Demo
					</UButton>
				</div>

				<UIAvatarGroup />
			</div>
		</UContainer>
	</section>
</template>
