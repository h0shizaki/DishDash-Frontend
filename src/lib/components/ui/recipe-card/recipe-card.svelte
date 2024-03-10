<script lang="ts">
    import {DropDownMenu, DropDownMenuButton} from "$lib/components/ui/dropdown-menu";
    import {Card, CardContent, CardHeader} from "$lib/components/ui/card";
    import {KeywordsChip} from '$lib/components/ui/keyword-chip'
    export let recipe: unknown = {} ;
    const action= () => {
        console.log(recipe._id)
    }

</script>

<Card className="w-72 h-96 block">
    <DropDownMenu btnClass="float-right p-2 relative z-10">
        <DropDownMenuButton title="Add to bookmark" on:action={action}
                            variant="variant-ghost-primary"></DropDownMenuButton>
        <DropDownMenuButton title="Do not interested" on:action={action} variant="variant-ghost-error"></DropDownMenuButton>
    </DropDownMenu>
    <CardHeader className="w-64 p-2">
        <div class="w-full h-40">
            <p class="h3">{recipe.Name}</p>
            <img class="w-full rounded-lg" src="/images/post.png" alt="dish image"/>
        </div>

    </CardHeader>
    <CardContent className="w-64 block">
<!--        <div class="grid grid-cols-1 gap-1">-->
        <KeywordsChip keywords="{recipe.Keywords}" />
<!--        </div>-->
    </CardContent>
</Card>