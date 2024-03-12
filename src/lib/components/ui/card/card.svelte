<script lang="ts">
    export let className : string ="" ;
</script>

<div class={`card bg-initial ${className} `}>
    <slot />
</div>