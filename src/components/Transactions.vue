<template>
	<div>
		<div class="flex justify-between items-center">
			<h3 class="text-lg font-semibold text-gray-700">Transactions</h3>
			<a href="#" class="block w-6 h-6 bg-red-500 text-white rounded-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>

		<div class="space-y-5 mt-6">
			<div class="flex justify-between items-center">
				<div class="flex items-center">
					<div
						class="
							flex
							items-center
							justify-center
							bg-white
							text-red-500
							rounded-xl
							w-10
							h-10
							mr-4
						"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-6"
						>
							<path
								fill="#fff"
								d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
							/>
						</svg>
					</div>

					<div>
						<span class="block leading-3">Taxi</span>
						<span class="text-xs text-gray-400">01:21 PM</span>
					</div>
				</div>

				<div>-$9.20</div>
			</div>
			<div class="flex justify-between items-center">
				<div class="flex items-center">
					<div
						class="
							flex
							items-center
							justify-center
							bg-white
							text-red-500
							rounded-xl
							w-10
							h-10
							mr-4
						"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>

					<div>
						<span class="block leading-3">Netflix</span>
						<span class="text-xs text-gray-400">11:15 PM</span>
					</div>
				</div>

				<div>-$24.99</div>
			</div>
			<div class="flex justify-between items-center">
				<div class="flex items-center">
					<div
						class="
							flex
							items-center
							justify-center
							bg-white
							text-red-500
							rounded-xl
							w-10
							h-10
							mr-4
						"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
							/>
						</svg>
					</div>

					<div>
						<span class="block leading-3">Shopping</span>
						<span class="text-xs text-gray-400">Jan 10, 2020</span>
					</div>
				</div>

				<div>-$142.00</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Transactions",
};
</script>
