<template>
	<form action="/" method="POST">
		<div class="relative">
			<div class="w-4 text-blue-800 absolute top-3 left-3">
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
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
			<input
				type="text"
				class="w-full bg-indigo-50 rounded-md h-10 pl-10 text-indigo-900 outline-none focus:ring-2 focus:ring-blue-600"
			/>
		</div>
	</form>
</template>

<script>
export default {
	name: "SearchForm",
};
</script>
