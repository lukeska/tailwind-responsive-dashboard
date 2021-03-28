<template>
	<div class="flex h-full">
		<div class="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
			<div class="w-full lg:fixed lg:w-24 h-full bg-blue-800 relative">
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

			<div class="overflow-hidden lg:overflow-visible pb-24 lg:pb-0">
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
									class="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5"
								>
									<div
										class="bg-indigo-50 p-2 rounded-lg text-blue-800 w-full lg:w-auto"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											class="w-8 mx-auto"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</div>
									<div>
										<span
											class="block uppercase text-xs text-gray-400 tracking-wider font-semibold"
											>Visitors</span
										>
										<span
											class="text-xl lg:text-2xl font-semibold"
											>10,320</span
										>
									</div>
								</div>
								<div
									class="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5"
								>
									<div
										class="bg-indigo-50 p-2 rounded-lg text-blue-800 w-full lg:w-auto"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											class="w-8 mx-auto"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
											/>
										</svg>
									</div>
									<div>
										<span
											class="block uppercase text-xs text-gray-400 tracking-wider font-semibold"
											>Customers</span
										>
										<span
											class="text-xl lg:text-2xl font-semibold"
											>4,628</span
										>
									</div>
								</div>
								<div
									class="w-1/3 bg-red-500 shadow-lg border border-red-500 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5"
								>
									<div
										class="bg-red-700 p-2 rounded-lg text-white w-full lg:w-auto"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											class="w-8 mx-auto"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									</div>
									<div>
										<span
											class="block uppercase text-xs text-red-200 tracking-wider font-semibold"
											>Orders</span
										>
										<span
											class="text-xl lg:text-2xl font-semibold text-white"
											>2,980</span
										>
									</div>
								</div>
							</div>

							<div
								class="bg-gray-300 rounded-xl h-28 mt-4 lg:mt-10 w-full"
							></div>

							<Blog />
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
import Blog from "./components/Blog.vue";

export default {
	name: "App",
	components: { MainNav, Tools, Blog },
	data: function () {
		return {
			showSidebar: false,
		};
	},
};
</script>
