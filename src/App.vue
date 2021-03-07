<template>
	<div class="flex h-full">
		<div class="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
			<div class="w-full lg:w-24 h-full bg-blue-800 relative">
				<a
					href="#"
					class="hidden absolute top-10 left-1/2 transform -translate-x-1/2 lg:flex lg:justify-center lg:items-center w-14 h-14 rounded-xl hover:bg-white hover:bg-opacity-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-8 w-8 text-white"
					>
						<path
							d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
						/>
					</svg>
				</a>

				<MainNav />
			</div>
		</div>

		<div class="w-full p-4 lg:p-10">
			<Tools />

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
import MainNav from "./components/MainNav.vue";
import Tools from "./components/Tools.vue";

export default {
	name: "App",
	components: { MainNav, Tools },
	data: function () {
		return {
			showSidebar: false,
		};
	},
};
</script>
