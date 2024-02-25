<script lang="ts" >
import { Stepper, Step } from '@skeletonlabs/skeleton';
import { goto } from '$app/navigation';
import FeatureTab from './Tab/FeatureTab.svelte';
import RegisterForm from './Form/RegisterForm.svelte';
import InterestForm from './InterestForm.svelte';

function onCompleteHandler(e: Event): void { goto("/") }
let registerLockState: boolean = true
</script>


<Stepper on:complete={onCompleteHandler}>
	<Step>
		<svelte:fragment slot="header">Discover the best food & drink recipes</svelte:fragment>
		<div class="relative top-0  w-1/3 rounded-sm mx-auto">
            <img src="/images/hero.png" class="w-auto" alt="Hero Image"/>
        </div>
		<FeatureTab />
	</Step>
	<Step locked={registerLockState}>
		<svelte:fragment slot="header">Registaration Form</svelte:fragment>
		<RegisterForm bind:lockedState={registerLockState}/>
	</Step>
	<Step>
		<svelte:fragment slot="header">What are your interests</svelte:fragment>
		<InterestForm />
	</Step>

</Stepper>


<!-- <form action="#">
	<div class="flex flex-col items-start space-y-5 mt-8">
		<h2 class="h2 font-bold text-gray-700">Register</h2>
		<div class="py-1 w-1/2">
			<label for="username" class="block text-md font-medium text-gray-900 dark:text-white">Username</label>
			<input type="text" placeholder="Username"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
		</div>
		<div class="py-1 w-1/2">
			<label for="password" class="block text-md font-medium text-gray-900 dark:text-white">Password</label>
			<input type="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
		</div>

		<div class='flex flex-col items-center w-1/2'>
			<div class="block my-2">
				Don't have an account? <a href="/register" class="text-blue-400 decolartion">Register</a>
			</div>

			<button class="btn variant-filled-primary text-white font-lg w-full ">Login</button>
		</div>
	</div>

</form> -->