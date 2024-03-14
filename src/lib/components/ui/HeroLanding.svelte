<script lang="ts">
    export let title: string = "Welcome"
    export let body: string = ""
    export let subtitle = ''
    export let image = '/images/post.png'
</script>

<div class="flex flex-row justify-center items-center space-x-2 mb-5">
    <div class="py-1 w-1/2">
        <img src={image} alt="Success" class="w-100" />
    </div>
    <div class="py-1 w-1/2 mb-16">
        <span class="text-blue-500 h4 font-semibold"><span class="font-bold h3">{title}</span>{subtitle}</span>
        <p class="text-blue-500 text-sm">
            {body}
        </p>

    </div>
</div>