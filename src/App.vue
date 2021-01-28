<template>
	<div class="flex h-full">
		<div class="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
			<div class="w-full lg:w-24 h-full bg-blue-800 relative">
				<a
					href="#"
					class="hidden absolute top-10 left-1/2 transform -translate-x-1/2 lg:block w-14 h-14 bg-yellow-300 rounded-xl"
				></a>

				<div
					class="flex lg:flex-col items-center justify-center h-full space-x-4 lg:space-x-0 lg:space-y-4 py-4"
				>
					<a href="#" class="block w-14 h-14 bg-white rounded-xl"></a>
					<a href="#" class="block w-14 h-14 bg-white rounded-xl"></a>
					<a href="#" class="block w-14 h-14 bg-white rounded-xl"></a>
					<a href="#" class="block w-14 h-14 bg-white rounded-xl"></a>
				</div>
			</div>
		</div>

		<div class="w-full p-4 lg:p-10">
			<div class="bg-gray-300 rounded-xl h-14">search</div>

			<div class="bg-gray-300 rounded-xl mt-4 lg:hidden p-2">
				<button
					class="block w-32 h-10 bg-blue-600 mx-auto"
					@click="showSidebar = !showSidebar"
				>
					Toggle sidebar
				</button>
			</div>

			<div class="overflow-hidden">
				<div
					class="transform lg:transform-none transition-all duration-300"
					:class="showSidebar ? '-translate-x-full' : ''"
				>
					<div class="flex mt-4 lg:mt-10 lg:space-x-10">
						<div
							class="w-full flex-shrink-0 lg:w-3/4 lg:flex-shrink rounded-xl"
						>
							<div class="flex space-x-4 lg:space-x-10">
								<div
									class="bg-gray-300 rounded-xl h-28 w-full"
								></div>
								<div
									class="bg-gray-300 rounded-xl h-28 w-full"
								></div>
								<div
									class="bg-gray-300 rounded-xl h-28 w-full"
								></div>
							</div>

							<div
								class="bg-gray-300 rounded-xl h-28 mt-4 lg:mt-10 w-full"
							></div>

							<div
								class="flex space-x-4 lg:space-x-10 mt-4 lg:mt-10"
							>
								<div
									class="bg-gray-300 rounded-xl h-28 w-full"
								></div>
								<div
									class="bg-gray-300 rounded-xl h-28 w-full"
								></div>
							</div>
						</div>
						<div
							class="w-full flex-shrink-0 lg:w-1/4 lg:flex-shrink bg-gray-300 rounded-xl h-52"
						>
							sidebar
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	data: function () {
		return {
			showSidebar: false,
		};
	},
};
</script>
