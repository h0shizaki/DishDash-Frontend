<script lang="ts" >
import { Stepper, Step } from '@skeletonlabs/skeleton';
import { goto } from '$app/navigation';
import FeatureTab from './Tab/FeatureTab.svelte';
import RegisterForm from './Form/RegisterForm.svelte';
import InterestForm from './InterestForm.svelte';

function onCompleteHandler(): void { goto("/") }
let registerLockState: boolean = true
let isRegistered = false;
</script>


<Stepper on:complete={onCompleteHandler} >
	<Step>
		<svelte:fragment slot="header">Discover the best food & drink recipes</svelte:fragment>
		<div class="relative hidden lg:block top-0  w-1/3 rounded-sm mx-auto">
            <img src="/images/hero.png" class="w-auto" alt="Hero Image"/>
        </div>
		<FeatureTab />
	</Step>
	<Step locked={registerLockState}>
		<svelte:fragment slot="header">Registration Form</svelte:fragment>
		<RegisterForm bind:lockedState={registerLockState} bind:isComplete={isRegistered}/>
	</Step>
	<Step on:back={() => {console.log("Can not go back")}}>
		<svelte:fragment slot="header">What are your interests</svelte:fragment>
		<InterestForm />
	</Step>

</Stepper>