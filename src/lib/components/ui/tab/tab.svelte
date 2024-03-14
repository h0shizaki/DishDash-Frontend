<script lang="ts">
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    export let tabSet = 0
    export let labelList = []
</script>

<TabGroup>
    <Tab bind:group={tabSet} name="tab1" value={0} >
        <span>{labelList[0]}</span>
    </Tab>
    <Tab bind:group={tabSet} name="tab2" value={1}>{labelList[1]}</Tab>
    <Tab bind:group={tabSet} name="tab3" value={2}>{labelList[2]}</Tab>
    <!-- Tab Panels --->
    <svelte:fragment slot="panel">
        {#if tabSet === 0}
            <slot name="tab1" />
        {:else if tabSet === 1}
            <slot name="tab2" />
        {:else if tabSet === 2}
            <slot name="tab3" />
        {/if}
    </svelte:fragment>
</TabGroup>

