<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    import {CardSkeleton} from '$lib/components/ui/skeleton'
    import {Card, CardHeader, CardContent, CardFooter} from '$lib/components/ui/card'
</script>

<svelte:head>
    <title>DishDash: Home</title>
</svelte:head>

<h1 class="text-3xl font-bold underline">
    Hello world!

</h1>

<Card className="w-48">
    <CardHeader>
            <div class="placeholder animate-pulse w-full h-40" >
            </div>

    </CardHeader>
    <CardContent>
        <div class="grid grid-cols-1 gap-1">
            <div class="placeholder" />
            <div class="placeholder" />
            <div class="placeholder" />
            <div class="placeholder" />
        </div>
    </CardContent>
</Card>
<!--<Avatar initials="KK" background="bg-primary-500" />-->
<CardSkeleton className="w-48" />

