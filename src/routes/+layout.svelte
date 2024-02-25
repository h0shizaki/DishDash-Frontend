<script lang="ts">
    import "../app.css";
    import { AppShell } from '@skeletonlabs/skeleton';
    import Header from '$lib/components/header/Header.svelte'
</script>
  
<AppShell>
    <svelte:fragment slot="header">
        <Header />
    </svelte:fragment>
    <slot class="mt-1"/>
</AppShell>

<style global>
    body {
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
</style>