<template>
	<div class="flex items-center justify-between gap-x-2">
		<UDropdown
			:items="items"
			:ui="{
				width: 'w-full',
				item: { disabled: 'cursor-text select-text', padding: 'p-3' },
				base: 'gap-4',
			}"
			:popper="{ strategy: 'absolute', placement: 'top' }"
			class="w-full"
		>
			<button
				class="flex items-center w-full p-2 text-left rounded-lg gap-x-4 hover:bg-gray-100 dark:hover:bg-white/10"
			>
				<UAvatar
					:src="user.avatarUrl"
					size="xs"
					:alt="user.email"
					class="uppercase bg-primary-500"
					:ui="{ placeholder: 'text-white' }"
				/>
				<div class="min-w-0">
					<p
						class="block text-sm font-normal truncate text-cool-700 dark:text-cool-300"
					>
						{{ getTextBeforeAt(user.email) }}
					</p>
				</div>
			</button>
		</UDropdown>
		<UIDarkmode />
	</div>
</template>

<script setup>
const { user, clear } = useUserSession();

const items = computed(() => {
	let links = [
		[
			{
				label: `${user.value.email}`,
				disabled: true,
			},
			{
				label: "Home",
				to: "/dashboard",
				icon: "i-solar-home-2-bold-duotone",
				exact: true,
			},
			{
				label: "Settings",
				to: "",
				icon: "i-solar-settings-linear",
				exact: true,
			},
			{
				label: "Help",
				to: "",
				icon: "i-solar-question-square-outline",
				exact: true,
			},
		],
	];

	links.push([
		{
			label: "Sign out",
			icon: "i-solar-login-2-outline",
			click: () => signOut(),
		},
	]);

	return links;
});

function getTextBeforeAt(input) {
	if (!input.includes("@")) {
		return input;
	}
	return input.split("@")[0];
}

async function signOut() {
	await clear();
	return navigateTo("/");
}
</script>
