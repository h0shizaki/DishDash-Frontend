<script lang="ts">

    import type {Bookmark, RecipeRecord} from "$lib/models/Bookmark";
    import {RecordCard} from "$lib/components/ui/record-card";

    export let bookmark: Bookmark;
    export let rating: 1 | 2 | 3 | 4 | 5;
    const records = bookmark.records.filter(rec => rec.rating == rating)


</script>

<div class="m-1">
    {#if records.length > 0 }
        <span class="font-bold text-indigo-600 h3">{rating} Star:</span>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 mx-auto">
            {#each records as rec}
                <RecordCard record="{rec}"/>
            {/each}

        </div>
    {/if}
</div>