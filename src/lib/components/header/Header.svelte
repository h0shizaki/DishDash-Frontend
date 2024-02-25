<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';

    export let isLogin = false;

</script>

<nav class="bg-white sticky w-full top-0 z-10 start-0 border-b border-gray-200 mb-3">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="items-center justify-between w-full flex order-1">
            <ul class="flex flex-row mx-auto p-0 font-medium border-0 border-gray-100 rounded-lg space-x-8 mt-0 bg-white ">
                <li>
                    <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Home
                    </a>
                </li>
                {#if isLogin}
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Bookmark
                        </a>
                    </li>
                {/if}
            </ul>
            {#if isLogin}
                <a href="#" class="flex flex-row space-x-3 my-auto items-center" >
                    <Avatar initials="KK" background="bg-primary-500 w-10 mx-2" /> Kan Katpark
                </a>
            {:else}
            <a href="/login" class="flex items-center space-x-6 rtl:space-x-reverse">
                <button type="button" class="btn variant-filled-tertiary">Sign In</button>
            </a>
            {/if}


        </div>
    </div>


</nav>