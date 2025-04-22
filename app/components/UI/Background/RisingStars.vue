<template>
	<div
		class="text-primary absolute top-[76px] md:top-[72px] w-full flex-shrink-0 opacity-100 transition-all duration-[400ms]"
	>
		<svg
			viewBox="0 0 1440 181"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="pointer-events-none"
		>
			<mask id="path-1-inside-1_414_5526" fill="white">
				<path d="M0 0H1440V181H0V0Z"></path>
			</mask>
			<path
				d="M0 0H1440V181H0V0Z"
				fill="url(#paint0_linear_414_5526)"
				fill-opacity="0.22"
			></path>
			<path
				d="M0 2H1440V-2H0V2Z"
				fill="url(#paint1_linear_414_5526)"
				mask="url(#path-1-inside-1_414_5526)"
			></path>
			<defs>
				<linearGradient
					id="paint0_linear_414_5526"
					x1="720"
					y1="0"
					x2="720"
					y2="181"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="currentColor"></stop>
					<stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="paint1_linear_414_5526"
					x1="0"
					y1="90.5"
					x2="1440"
					y2="90.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="currentColor" stop-opacity="0"></stop>
					<stop offset="0.395" stop-color="currentColor"></stop>
					<stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
				</linearGradient>
			</defs>
		</svg>

		<div
			class="z-0 rising-stars absolute inset-x-0 top-0 h-10 lg:h-24 w-full pointer-events-none overflow-hidden bg-gradient-to-b from-20% to-80%"
		>
			<div
				class="rising-stars__small animate-risingstar [animation-duration:333s] w-px h-px text-primary"
				:style="`box-shadow: ${smallStars.join(',')}`"
			/>
			<div
				class="rising-stars__small animate-risingstar [animation-duration:333s] w-[2px] h-[2px] text-primary"
				:style="`box-shadow: ${mediumStars.join(',')}`"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{ size?: number; width?: number; height?: number }>(),
	{
		size: 2048,
		width: 3840,
		height: 3840,
	},
);

const { size, width, height } = toRefs(props);

const random = (max: number) => Math.floor(Math.random() * max);

const smallStars = computed(() => {
	return Array.from({ length: size.value }, () => {
		const x1 = random(width.value);
		const y1 = random(height.value);
		const x2 = random(width.value);
		const y2 = random(height.value);
		return `${x1}px ${y1}px currentColor, ${x2}px ${y2}px currentColor`;
	});
});

const mediumStars = computed(() => {
	return Array.from({ length: size.value / 2 }, () => {
		const x1 = random(width.value);
		const y1 = random(height.value);
		const x2 = random(width.value);
		const y2 = random(height.value);
		return `${x1}px ${y1}px currentColor, ${x2}px ${y2}px currentColor`;
	});
});
</script>
