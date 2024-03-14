<script lang="ts">
    import {Folder} from '$lib/components/ui/folder-card'
    import type {Bookmark, RecipeRecord} from "$lib/models/Bookmark";

    const mockBookmark: Bookmark = {
        _id: '123',
        title: 'Favorite',
        recipes: [{'recipeId': '222', rating: 5} as RecipeRecord]
    }
</script>
<svelte:head>
    <title>DishDash: My bookmarks</title>
</svelte:head>

<div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 mx-auto">
    <Folder folder="{mockBookmark}"/>
    <Folder folder="{mockBookmark}"/>
    <Folder folder="{mockBookmark}"/>
    <Folder folder="{mockBookmark}"/>
</div>