<script lang="ts">

    export let placeholder = "Something went wrong, please try again later."
    export let message: string = ""
</script>

<div class="flex flex-col items-center space-y-6">
    <img src="/images/techny-something-went-wrong.png" alt="Error" width="328"/>
    <span class="text-blue-500 font-semibold text-2xl">{placeholder}</span>
    {#if message}
        <div class="card variant-filled-surface">
            {message}
        </div>
    {/if}
</div>