<script lang="ts">
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/header/Header.svelte';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
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
