<script lang="ts">
    import {authstore, isLoggedIn, user} from "$lib/stores/auth";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    onMount(async () => {
        if($isLoggedIn){
            console.log("logged in")
        }else{
            return await goto('/login', {state: {message: 'Please login to continue.'}})
        }
    })
</script>

<slot />