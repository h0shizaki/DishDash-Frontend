<script lang="ts">
    import {authstore, isLoggedIn, user} from "$lib/stores/auth";
    import {goto} from "$app/navigation";
    import {Avatar} from "@skeletonlabs/skeleton";


</script>
<nav class="bg-white sticky w-full top-0 z-10 start-0 border-b border-gray-200 mb-3 lg:pb-1">
    <div class="w-full flex flex-wrap items-center justify-between p-1.5 lg:pr-2.5">
        <div class="items-center justify-between w-full flex order-1">
            <ul class="flex flex-row p-0 font-medium border-0 border-gray-100 rounded-lg space-x-4 lg:space-x-8 mt-0 bg-white">
                {#if $isLoggedIn}
                    <li>
                        <a href="/home" class="block py-2 h3 text-blue-500 rounded hover:text-indigo-400 ">
                            DishDash
                        </a>
                    </li>
                {:else}
                    <li>
                        <a href="/" class="block py-2 h3 text-blue-500 rounded hover:text-indigo-400 ">
                            DishDash
                        </a>
                    </li>
                {/if}
                {#if $isLoggedIn}
                    <li class="flex flex-col justify-center">
                        <a href="/bookmark" class="text-gray-900 rounded hover:text-gray-600">
                            Bookmark
                        </a>
                    </li>
                {/if}
            </ul>
            {#if $user != null}
                <div class="flex flex-row space-x-4">
                    <a href="/profile/me" class="flex flex-row space-x-3 my-auto items-center">
                        {$user.username}
                    </a>
                    <span on:click={() => {authstore.logout() ; goto('/')}}
                       class="flex items-center space-x-6 rtl:space-x-reverse ">
                        <button type="button" class="btn variant-filled-tertiary btn-sm">Sign Out</button>
                    </span>
                </div>
            {:else}
                <a href="/login" class="flex items-center space-x-6 rtl:space-x-reverse ">
                    <button type="button" class="btn variant-filled-tertiary btn-sm">Sign In</button>
                </a>
            {/if}
        </div>
    </div>


</nav>