<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';

    export let isLogin = true;

</script>

<nav class="bg-white sticky w-full top-0 z-10 start-0 border-b border-gray-200 mb-3 lg:pb-1">
    <div class="w-full flex flex-wrap items-center justify-between p-1.5 lg:pr-2.5">
        <div class="items-center justify-between w-full flex order-1">
            <ul class="flex flex-row p-0 font-medium border-0 border-gray-100 rounded-lg space-x-4 lg:space-x-8 mt-0 bg-white">
                <li>
                    <a href="/" class="block py-2 h3 text-blue-500 rounded hover:text-indigo-400 ">
                        DishDash
                    </a>
                </li>
                {#if isLogin}
                    <li class="flex flex-col justify-center">
                        <a href="#" class="text-gray-900 rounded hover:text-gray-600">
                            Bookmark
                        </a>
                    </li>
                {/if}
            </ul>
            {#if isLogin}
<!--                <a href="#" class="flex flex-row space-x-3 my-auto items-center" >-->
<!--                    <Avatar initials="KK" background="bg-primary-500 w-10 mx-2" /> Kan Katpark-->
<!--                </a>-->
            {:else}
                <a href="/login" class="flex items-center space-x-6 rtl:space-x-reverse ">
                    <button type="button" class="btn variant-filled-tertiary btn-sm">Sign In</button>
                </a>
            {/if}
        </div>
    </div>


</nav>