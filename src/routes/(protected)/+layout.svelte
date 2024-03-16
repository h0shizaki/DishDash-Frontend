<script lang="ts">
    import {isLoggedIn} from "$lib/stores/auth";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    onMount(async () => {
        if($isLoggedIn){
            // console.log("logged in")
            // console.log(localStorage.getItem('token')?.toString())
        }else{
            return await goto('/login', {state: {message: 'Please login to continue.'}})
        }
    })
</script>

<slot />