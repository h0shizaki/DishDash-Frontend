<script lang="ts">
    export let title: string = "Welcome"
    export let body: string = "to our community! We're thrilled to have you join us. 🎉"
</script>

<div class="flex flex-row justify-center items-center space-x-2 mb-5">
    <div class="py-1 w-1/2">
        <img src="/images/post.png" alt="Success" class="w-100" />
    </div>
    <div class="py-1 w-1/2 mb-16">
        <span class="text-blue-500 h4 font-semibold"><span class="font-bold h3">{title}</span>{body}</span>
    </div>
</div>