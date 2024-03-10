<script lang="ts">
    import {Avatar} from '@skeletonlabs/skeleton';
    import {CardSkeleton} from '$lib/components/ui/skeleton'
    import {RecipeCard} from "$lib/components/ui/recipe-card";


    const mockRecipe = {
        "_id": "65d5e48d8598535be43eb8f1",
        "RecipeId": "41",
        "Name": "Carina's Tofu-Vegetable Kebabs",
        "AuthorId": "1586",
        "AuthorName": "Cyclopz",
        "CookTime": "PT20M",
        "PrepTime": "PT24H",
        "TotalTime": "PT24H20M",
        "DatePublished": "1999-09-03T14:54:00Z",
        "Description": "This dish is best prepared a day in advance to allow the ingredients to soak in  the marinade overnight.",
        "Images": [
            "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/41/picmbLig8.jpg",
            "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/41/picL02w0s.jpg"
        ],
        "RecipeCategory": "Soy/Tofu",
        "Keywords": [
            "Broil/Grill",
            "Vegetable",
            "Low Cholesterol",
            "Weeknight",
            "Oven",
            "Beans"
        ],
        "RecipeIngredientQuantities": [
            "10",
            "2",
            "1/2",
            "12",
            "1",
            "1/4",
            "3",
            "4"
        ],
        "RecipeIngredientParts": [
            "eggplant",
            "low sodium soy sauce",
            "extra firm tofu",
            "mustard powder",
            "red wine vinegar",
            "garlic cloves",
            "soy sauce",
            "maple syrup",
            "lemon juice",
            "mushrooms",
            "black pepper",
            "honey",
            "zucchini",
            "olive oil"
        ],
        "AggregatedRating": "4.5",
        "Calories": "536.1",
        "FatContent": "24.0",
        "SaturatedFatContent": "3.8",
        "CholesterolContent": "0.0",
        "SodiumContent": "1558.6",
        "CarbohydrateContent": "64.2",
        "FiberContent": "17.3",
        "SugarContent": "32.1",
        "ProteinContent": "29.3",
        "RecipeServings": "2.0",
        "RecipeYield": "4 kebabs",
        "RecipeInstructions": [
            "Cut red pepper in half, removing stem and seeds, and cut each half into  one-inch squares.",
            "Wipe mushrooms clean with a moist paper towel and remove  stems.",
            "Set aside.  Cut  eggplant lengthwise in half, then cut each half into approximately three strips.",
            "Alternatively, put all ingredients in a glass jar, cover tightly with the lid  and shake well until mixed.",
            "Make the marinade by putting all ingredients in a  blender, and blend on high speed for about one minute until mixed.",
            "Continue in this way until  all skewers are full.",
            "Drain the tofu, carefully squeezing out excess water,  and pat dry with paper towels.",
            "Refrigerate the kebabs for three to eight hours, occasionally spooning the  marinade over them.",
            "Lay the kebabs in a long, shallow baking pan or on  a non-metal tray, making sure they lie flat. Evenly pour the marinade over the  kebabs, turning them once so that the tofu and vegetables are coated.",
            "Thread tofu and vegetables on to barbecue skewers in alternating color  combinations: For example, first a piece of eggplant, then a slice of tofu, then zucchini, then red pepper, baby corn and mushrooms.",
            "Broil or grill the kebabs at 450 F for 15-20 minutes, or on the grill, until the vegetables are browned.",
            "Suggestions  This meal can be served over cooked, brown rice. Amounts can easily be doubled to make four servings.",
            "Cut strips crosswise into one-inch cubes.",
            "Cut tofu into one-inch squares.",
            "Slice zucchini into half-inch thick  slices."
        ]
    }

</script>

<svelte:head>
    <title>DishDash: Home</title>
</svelte:head>

<h1 class="text-3xl font-bold underline">
    Hello world!

</h1>

<RecipeCard recipe={mockRecipe} />

<!--<Avatar initials="KK" background="bg-primary-500" />-->
<!--<CardSkeleton className="w-48" />-->

