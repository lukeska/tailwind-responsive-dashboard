<template>
	<div class="mt-4 lg:mt-10">
		<div class="bg-indigo-50 rounded-xl p-4 lg:p-10">
			<div class="flex justify-between items-center mb-10">
				<h3 class="text-lg font-semibold text-gray-700">Statistics</h3>

				<div>
					<button
						class="
							bg-white
							text-blue-800
							flex
							space-x-3
							items-center
							px-4
							py-2
							rounded-full
							font-semibold
							focus:outline-none
						"
					>
						<span>2021</span>
						<span class="block w-4 pt-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</button>
				</div>
			</div>

			<div class="w-full h-72 relative">
				<div
					class="
						absolute
						h-full
						w-4
						left-0
						flex flex-col
						justify-between
						items-end
						text-gray-400
						pb-6
					"
				>
					<span>4k</span>
					<span>3k</span>
					<span>2k</span>
					<span>1k</span>
					<span>0</span>
				</div>

				<div
					class="
						relative
						h-full
						ml-6
						overflow-x-auto overflow-y-hidden
					"
				>
					<div
						class="
							pb-8
							flex
							justify-between
							h-full
							w-max
							md:w-auto
							relative
						"
					>
						<div
							v-for="candle in candles"
							v-bind:key="candle.id"
							class="relative w-10 h-full inline-block"
						>
							<div
								class="
									border-indigo-200 border
									inline-block
									absolute
									left-1/2
								"
								:style="{
									height: candle.thinHeight,
									top: candle.thinTop,
								}"
							>
								<div class="relative w-full h-full">
									<div
										class="
											w-2
											absolute
											transform
											-translate-x-1/2
											bg-blue-800
											rounded-full
										"
										:style="{
											height: candle.wideHeight,
											top: candle.wideTop,
										}"
									></div>
								</div>
							</div>
						</div>

						<div
							class="
								absolute
								w-full
								bottom-0
								flex
								justify-between
								text-gray-400
							"
						>
							<span>Gen</span>
							<span>Feb</span>
							<span>Mar</span>
							<span>Apr</span>
							<span>May</span>
							<span>Jun</span>
							<span>Jul</span>
							<span>Aug</span>
							<span>Sep</span>
							<span>Oct</span>
							<span>Nov</span>
							<span>Dec</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Candlesticks",
	data: function () {
		return {
			candles: [
				{
					id: 1,
					thinHeight: "80%",
					thinTop: "10%",
					wideHeight: "50%",
					wideTop: "20%",
				},
				{
					id: 2,
					thinHeight: "60%",
					thinTop: "15%",
					wideHeight: "60%",
					wideTop: "10%",
				},
				{
					id: 3,
					thinHeight: "65%",
					thinTop: "5%",
					wideHeight: "20%",
					wideTop: "25%",
				},
				{
					id: 4,
					thinHeight: "70%",
					thinTop: "5%",
					wideHeight: "40%",
					wideTop: "15%",
				},
				{
					id: 5,
					thinHeight: "50%",
					thinTop: "25%",
					wideHeight: "30%",
					wideTop: "20%",
				},
				{
					id: 6,
					thinHeight: "70%",
					thinTop: "27%",
					wideHeight: "42%",
					wideTop: "31%",
				},
				{
					id: 7,
					thinHeight: "60%",
					thinTop: "12%",
					wideHeight: "44%",
					wideTop: "21%",
				},
				{
					id: 8,
					thinHeight: "80%",
					thinTop: "5%",
					wideHeight: "60%",
					wideTop: "10%",
				},
				{
					id: 9,
					thinHeight: "65%",
					thinTop: "10%",
					wideHeight: "50%",
					wideTop: "25%",
				},
				{
					id: 10,
					thinHeight: "70%",
					thinTop: "5%",
					wideHeight: "40%",
					wideTop: "15%",
				},
				{
					id: 11,
					thinHeight: "80%",
					thinTop: "5%",
					wideHeight: "60%",
					wideTop: "10%",
				},
				{
					id: 12,
					thinHeight: "45%",
					thinTop: "25%",
					wideHeight: "20%",
					wideTop: "25%",
				},
				{
					id: 13,
					thinHeight: "70%",
					thinTop: "15%",
					wideHeight: "40%",
					wideTop: "15%",
				},
				{
					id: 14,
					thinHeight: "80%",
					thinTop: "5%",
					wideHeight: "60%",
					wideTop: "10%",
				},
				{
					id: 15,
					thinHeight: "75%",
					thinTop: "17%",
					wideHeight: "30%",
					wideTop: "25%",
				},
				{
					id: 16,
					thinHeight: "70%",
					thinTop: "25%",
					wideHeight: "40%",
					wideTop: "15%",
				},
				{
					id: 17,
					thinHeight: "80%",
					thinTop: "15%",
					wideHeight: "60%",
					wideTop: "10%",
				},
				{
					id: 18,
					thinHeight: "75%",
					thinTop: "12%",
					wideHeight: "50%",
					wideTop: "25%",
				},
			],
		};
	},
};
</script>
