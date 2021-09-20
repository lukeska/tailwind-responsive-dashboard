<template>
	<div>
		<div class="w-full text-right mb-6">
			<a
				href="#"
				class="inline-block w-6 text-gray-400 hover:text-gray-800"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
					/>
				</svg>
			</a>
		</div>

		<div class="relative">
			<div
				class="
					flex
					items-center
					justify-center
					w-32
					h-32
					rounded-full
					bg-white
					mx-auto
					relative
				"
			>
				<div
					class="
						text-blue-800
						h-20
						w-20
						bg-gray-50
						rounded-full
						flex
						items-center
						justify-center
						shadow-lg
					"
				>
					<div>
						<span class="text-2xl font-black">72</span>
						<span class="font-bold">%</span>
					</div>
				</div>

				<!-- https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705 -->
				<div class="absolute w-32 text-blue-800" style="scale: 1.15">
					<svg viewBox="0 0 36 36" stroke="currentColor">
						<path
							style="
								fill: none;
								stroke-width: 0.8;
								stroke-linecap: round;
							"
							stroke-dasharray="72, 100"
							d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
					</svg>
				</div>
			</div>

			<div
				class="
					text-white
					bg-blue-800
					rounded
					w-auto
					absolute
					top-0
					right-0
					lg:-right-10
					px-3
					py-2
					text-sm
					shadow-lg
				"
			>
				$10,600
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Percentage",
};
</script>
