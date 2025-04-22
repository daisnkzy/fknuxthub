<template>
	<div class="grid grid-cols-1 gap-2">
		<AuthButton
			label="Continue with Google"
			icon="i-logos-google-icon"
			path="/api/auth/google"
		/>
		<AuthButton
			label="Continue with Github"
			icon="i-logos-github-icon"
			path="/api/auth/github"
		/>
	</div>
</template>
