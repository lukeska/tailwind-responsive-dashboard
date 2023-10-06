<template>
	<div class="flex lg:space-x-10">
		<div class="hidden lg:w-1/2 lg:block">
			<SearchForm />
		</div>
		<div class="w-full lg:w-1/2">
			<div class="flex justify-between">
				<div class="lg:hidden">
					<a
						href="#"
						class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-8 h-8 text-blue-800"
						>
							<path
								d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
							/>
						</svg>
					</a>
				</div>

				<div
					class="items-center hidden h-10 space-x-6 font-semibold lg:flex"
				>
					<a href="#" class="hover:text-blue-800">Feedback</a>
					<a href="#" class="hover:text-blue-800">Contacts</a>
					<a href="#" class="hover:text-blue-800">Help</a>
				</div>
				<div class="flex items-center space-x-4">
					<a
						href="#"
						class="relative flex items-center justify-center w-10 h-10 text-gray-300 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-6"
						>
							<path
								d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
							/>
						</svg>

						<div
							class="absolute w-2 h-2 bg-red-500 border border-white rounded-full top-2 right-2"
						></div>
					</a>

					<div class="lg:relative">
						<button
							@click="isOpen = !isOpen"
							class="w-10 h-10 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-800 focus:ring-offset-white"
						>
							<img
								src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
								alt=""
								class="object-cover w-10 h-10"
							/>
						</button>

						<button
							v-if="isOpen"
							@click="isOpen = false"
							class="fixed inset-0 z-30 w-full h-full cursor-default"
							tabindex="-1"
						></button>

						<transition
							enter-active-class="transition duration-100 ease-out transform"
							enter-from-class="scale-95 opacity-0"
							enter-to-class="scale-100 opacity-100"
							leave-active-class="transition duration-75 ease-in transform"
							leave-from-class="scale-100 opacity-100"
							leave-to-class="scale-95 opacity-0"
						>
							<div
								v-if="isOpen"
								class="absolute right-0 z-40 w-full mt-2 lg:w-48"
							>
								<div
									class="py-1 mx-4 bg-white rounded-md shadow-lg lg:mx-0 ring-1 ring-black ring-opacity-5"
								>
									<div class="p-3 lg:hidden">
										<SearchForm />
									</div>

									<div class="border-b lg:hidden">
										<a
											href="#"
											class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>Feedback</a
										>
										<a
											href="#"
											class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>Contacts</a
										>
										<a
											href="#"
											class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>Help</a
										>
									</div>

									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>Profile</a
									>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>Settings</a
									>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>Log out</a
									>
								</div>
							</div>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SearchForm from "./SearchForm.vue";

export default {
	components: { SearchForm },
	name: "Tools",
	data() {
		return {
			isOpen: false,
		};
	},
};
</script>
