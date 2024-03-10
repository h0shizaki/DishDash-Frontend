<script lang="ts">
	import '../app.pcss';
	import '../style.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/header/Header.svelte';
	import { Modal } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';


	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Modal></Modal>

<AppShell>
	<svelte:fragment slot="header">
		<Header></Header>
	</svelte:fragment>
	<slot class="mt-1" />
</AppShell>

<style global>
	body {
		font-family: 'Roboto', sans-serif;
		font-size: 18px;
	}
</style>
