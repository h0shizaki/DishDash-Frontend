<script lang="ts" >
	import {LoginSchema} from "$lib/models/LoginSchema";
	import {createForm} from "svelte-forms-lib";
	import {authstore} from "$lib/stores/auth";
	import Spinner from "$lib/components/ui/Spinner.svelte";
	import {goto} from "$app/navigation";
	import { onMount } from 'svelte';
	import {Alert} from "$lib/components/ui/alert";
	let message = '';
	onMount( () => {
		if(history){
			message = history.state["sveltekit:states"].message
		}
	})

	const {form , isSubmitting ,errors, state, handleChange, handleSubmit} = createForm({
		validationSchema: LoginSchema,
		initialValues: {
			username: "",
			password: ""
		},
		onSubmit: async (values) =>  {
			try{
				await authstore.login(values.username, values.password)
				await goto('/home')
			}catch(e){
				console.log(e)
				if(e.response?.status === 401){
				message = 'Incorrect username or password'
				return goto('/login', {state: {message: 'Incorrect username or password' }})
				}else {
					return  goto('/network-error')
				}


			}
		}
	})
</script>
{#if $isSubmitting}
	<Spinner percentage="{undefined}"  variant="normal" placeholder="We're processing please wait a moment."/>
{:else }
	<form on:submit={handleSubmit} >
		{#if message}
			<Alert message={message} title="FAILED" variant="variant-filled-error" ></Alert>
		{/if}
		<div class="flex flex-col p-2">
			<h2 class="h2 font-semibold text-gray-700">Login</h2>
			<div class="py-1 w-full">
				<label for="username" class="block text-md text-gray-900">Username</label>
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
					<div class="text-red-600">
						<p>{$errors.username}</p>
					</div>
				{/if}
			</div>
			<div class="py-1 w-full">
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
					<div class="text-red-600">
						<p>{$errors.password}</p>
					</div>
				{/if}
			</div>

			<div class='flex flex-col items-center w-full'>
				<div class="block my-2">
					Don't have an account? <a href="/register" class="text-blue-400 decolartion">Register</a>
				</div>

				<button type="submit" class="btn variant-filled-primary text-white font-lg w-full" id="submit">Login</button>
			</div>
		</div>
	</form>
{/if}