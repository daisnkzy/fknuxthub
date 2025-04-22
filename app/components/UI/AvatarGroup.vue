<script setup>
const avatars = [
	{
		src: "https://i.pravatar.cc/150?img=56",
		alt: "benjamincanac",
	},
	{
		src: "https://i.pravatar.cc/150?img=57",
		alt: "Atinux",
	},
	{
		src: "https://i.pravatar.cc/150?img=51",
		alt: "smarroufin",
	},
	{
		src: "https://i.pravatar.cc/150?img=52",
		alt: "user52",
	},
	{
		src: "https://i.pravatar.cc/150?img=59",
		alt: "user59",
	},
];
</script>

<template>
	<div class="flex items-end justify-center mx-auto my-4 gap-x-4">
		<div>
			<UAvatarGroup size="xs">
				<UAvatar
					v-for="(avatar, index) in avatars"
					:key="index"
					:src="avatar.src"
					:alt="avatar.alt"
				/>
			</UAvatarGroup>
		</div>

		<div class="text-center">
			<UIcon
				v-for="i in 5"
				:key="i"
				name="i-ph-star-fill"
				class="size-3 text-amber-400"
			/>
			<p class="-mt-1 text-xs text-gray-500">Trust by 100+ customers</p>
		</div>
	</div>
</template>
