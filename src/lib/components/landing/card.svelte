<script lang="ts">
    export let title;
    export let description;
    export let subTitle = "";
</script>

<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">{subTitle}</p>
            <div class="w-full font-bold text-xl text-gray-800 px-6">{title}</div>
            <p class="text-gray-800 text-base px-6 mb-5">
                {description}
            </p>
        </a>
    </div>
    <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
<!--        <button class="btn variant-filled-secondary" >Action2</button>-->
    </div>
</div>