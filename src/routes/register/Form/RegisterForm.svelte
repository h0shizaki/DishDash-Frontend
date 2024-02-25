<script lang="ts" >
    
    export let lockedState: boolean = true;
    export let onSubmit = async function() {
        console.log("I'm the handleOnSubmit() in App.svelte")
        lockedState = false
    }

</script>

<form action="#" on:submit={onSubmit}>
	<div class="flex flex-col items-start space-y-5 mt-8">
		<div class="py-1 w-1/2">
			<label for="username" class="block text-md font-medium text-gray-900 dark:text-white">Username</label>
			<input type="text" placeholder="Username"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
		</div>
		<div class="py-1 w-1/2">
			<label for="password" class="block text-md font-medium text-gray-900 dark:text-white">Password</label>
			<input type="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
		</div>

		<div class='flex flex-col items-center w-1/2'>
			<button class="btn variant-filled-primary text-white font-lg w-full ">Login</button>
		</div>
	</div>
</form>