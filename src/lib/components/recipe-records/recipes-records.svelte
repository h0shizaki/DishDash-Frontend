<script lang="ts">

    import type {Bookmark} from "$lib/models/Bookmark";
    import {RecordCard} from "$lib/components/ui/record-card";

    export let bookmark: Bookmark;
    $: records = bookmark.records.sort( (a,b) => b.rating - a.rating )


</script>

<div class="m-1">
    {#if records.length > 0 }
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 w-full mx-auto">
            {#each records as rec}
                <RecordCard bind:record={rec} bookmarkId="{bookmark._id}"/>
            {/each}

        </div>
    {/if}
</div>