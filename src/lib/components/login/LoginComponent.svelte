<script lang="ts" >
	import {LoginSchema} from "$lib/models/LoginSchema";
	import {createForm} from "svelte-forms-lib";

	const {form ,errors, state, handleChange, handleSubmit} = createForm({
		validationSchema: LoginSchema,
		initialValues: {
			username: "",
			password: ""
		},
		onSubmit: values =>  {
			console.log(values)
		}
	})
</script>
<form on:submit={handleSubmit} >
	<div class="flex flex-col items-start space-y-5 mt-8">
		<h2 class="h2 font-bold text-gray-700">Login</h2>
		<div class="py-1 w-1/2">
			<label for="username" class="block text-md font-medium text-gray-900 dark:text-white">Username</label>
			<input
					type="text"
					name="username"
					id="username"
					placeholder="Username"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					on:change={handleChange}
					bind:value={$form.username}
			/>
			{#if $errors.username}
				<aside class="alert variant-filled-error mt-1 ">
					<div class="alert-message">
						<p>{$errors.username}</p>
					</div>
				</aside>
			{/if}
		</div>
		<div class="py-1 w-1/2">
			<label for="password" class="block text-md font-medium text-gray-900 dark:text-white">Password</label>
			<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					on:change={handleChange}
					bind:value={$form.password}
			/>
			{#if $errors.password}
				<aside class="alert variant-filled-error mt-1">
					<div class="alert-message">
						<p>{$errors.password}</p>
					</div>
				</aside>
			{/if}
		</div>

		<div class='flex flex-col items-center w-1/2'>
			<div class="block my-2">
				Don't have an account? <a href="/register" class="text-blue-400 decolartion">Register</a>
			</div>

			<button type="submit" class="btn variant-filled-primary text-white font-lg w-full" id="submit">Login</button>
		</div>
	</div>
</form>