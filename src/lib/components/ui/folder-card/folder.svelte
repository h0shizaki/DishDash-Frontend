<script lang="ts">
import type {Bookmark} from "$lib/models/Bookmark";

export let folder : Bookmark;
</script>


<a href="/bookmark/{folder._id}"
   class="flex flex-col w-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
    {#if folder.thumbnail}
        <img class="object-cover hidden w-16 sm:block rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
             src="{folder.thumbnail}" alt="">
    {/if}
    <div class="flex flex-col justify-between p-4 leading-normal w-full">
        {#if folder.title}
            <span class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 h-16 ">{folder.title}</span>
        {:else}
            <div class="placeholder animate-pulse h-16"></div>
        {/if}
    </div>
</a>
