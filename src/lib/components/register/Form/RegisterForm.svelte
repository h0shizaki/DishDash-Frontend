<script lang="ts" >
    import {RegisterSchema} from '$lib/models/RegisterSchema.ts'
    import {Gender} from '$lib/models/Gender.ts'
	import {createForm} from "svelte-forms-lib";
	import Spinner from "$lib/components/ui/Spinner.svelte";
	import Error from "$lib/components/ui/Error.svelte";
	import {authstore} from "$lib/stores/auth";
	import type {User} from "$lib/models/User";
	import {Alert} from "$lib/components/ui/alert";
    export let lockedState: boolean = true;

	let errorMessage = ''
	export let isComplete: boolean = false;
	let isLoading: boolean = false;
	let isError: boolean = false;
	const {form ,errors, state, handleChange, handleSubmit}  = createForm({
		initialValues: {
			firstname: "",
			lastname: "",
			username: "",
			email: "",
			password: "",
			confirm_password: "",
			gender: undefined,
		},
		validationSchema: RegisterSchema,
		onSubmit: async(values) =>  {
			isLoading = true
			const user: User = {
				email: values.email,
				firstname: values.firstname,
				gender: values.gender,
				interestedCategory: [],
				lastname: values.lastname,
				password: values.password,
				username: values.username
			}
			try{
				await authstore.register(user)
				isComplete =true
				lockedState = false
				isLoading = false

			}catch(e){
				console.log(e.response.data.body )
				if(e.response.data.body.message === "Duplicate User." ){
					isError = false
					isLoading = false
					errorMessage = "Duplicate Username or Email."
					return
				}
				// if(e instanceof Error){
				isError = true
				isComplete = false
				isLoading = false
				// }
			}
		}
	})


</script>
<div class="container-full flex flex-col justify-center p-6 shadow-sm rounded-sm">

	{#if isComplete}
		<span class="h4 text-blue-500 font-bold text-xl">Almost get done!</span>
	{:else if isLoading}
		<Spinner percentage="{undefined}"  variant="normal" placeholder="We're processing please wait a moment."/>
	{:else if isError}
		<Error />
	{:else}
	{#if errorMessage}
		<Alert message={errorMessage} title="FAILED" variant="variant-filled-error" ></Alert>
	{/if}
	<form on:submit={handleSubmit} >
		<div class="flex flex-col w-full lg:w-2/3 mx-auto space-y-3 lg:space-y-5  mt-2">
			<div class="grid lg:grid-cols-2 gap-6">
				<div class="relative z-0 w-full mb-2 group">
					<label for="firstname" class="block text-md font-medium text-gray-900 dark:text-white">Firstname</label>
					<input on:change={handleChange} bind:value={$form.firstname}  name="firstname" type="text" placeholder="John"  id="firstname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					{#if $errors.firstname}
						<div class="text-red-600">
							<p>{$errors.firstname}</p>
						</div>
					{/if}
				</div>
				<div class="relative z-0 w-full mb-2 group">
					<label for="lastname" class="block text-md font-medium text-gray-900 dark:text-white">Lastname</label>
					<input on:change={handleChange} bind:value={$form.lastname} name="lastname" type="text" placeholder="Doe"  id="lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					{#if $errors.lastname}
						<div class="text-red-600">
							<p>{$errors.lastname}</p>
						</div>
					{/if}
				</div>
			</div>
			<div>
				<div >
					<label for="email" class="block text-md font-medium text-gray-900 dark:text-white">Email</label>
					<input on:change={handleChange} bind:value={$form.email} name="email" type="text" placeholder="email"  id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					{#if $errors.email}
						<div class="text-red-600">
							<p>{$errors.email}</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="grid lg:grid-cols-2 gap-6">
				<div class="py-1">
					<label for="username" class="block text-md font-medium text-gray-900 dark:text-white">Username</label>
					<input on:change={handleChange} bind:value={$form.username} name="username" type="text" placeholder="Username"  id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					{#if $errors.username}
						<div class="text-red-600">
							<p>{$errors.username}</p>
						</div>
					{/if}
				</div>

				<div class="space-y-2 ">
					<label for="gender" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Select gender</label>
					<select on:change={handleChange} bind:value={$form.gender} id="gender" name="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
						<option selected>Choose gender</option>
						<option value="{Gender.MALE}">Male</option>
						<option value="{Gender.FEMALE}">Female</option>
						<option value="{Gender.OTHERS}">Others</option>
					</select>
					{#if $errors.gender}
						<div class="text-red-600">
							<p>{$errors.gender}</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="py-1 w-full">
				<label for="password" class="block text-md font-medium text-gray-900 dark:text-white">Password</label>
				<input on:change={handleChange} bind:value={$form.password} type="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
				{#if $errors.password}
					<div class="text-red-600">
						<p>{$errors.password}</p>
					</div>
				{/if}
			</div>
			<div class="py-1 w-full">
				<label for="password" class="block text-md font-medium text-gray-900 dark:text-white">Confirm-Password</label>
				<input on:change={handleChange} bind:value={$form.confirm_password} type="password" id="confirm_password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
				{#if $errors.confirm_password}
					<div class="text-red-600">
						<p>{$errors.confirm_password}</p>
					</div>
				{/if}
			</div>
			<div class="flex flex-row items-center">
				<input type="checkbox" class="mr-2" required /> Allow us to use all of your data.
			</div>
			<div class='flex flex-col items-center w-full'>
				<button type="submit" class="btn variant-filled-primary text-white font-lg w-full ">Register</button>
			</div>
		</div>
	</form>
	{/if}

</div>