<script lang="ts">
    export let variant = 'variant-ghost'
    export let title = ''
    export let message = ''
</script>

<aside class="alert {variant} " >
    <div class="alert-message">
        <h3 class="h5">{title}</h3>
        <p class="text-sm">{message}</p>
    </div>
</aside>