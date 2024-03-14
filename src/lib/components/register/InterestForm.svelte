<script lang="ts">
    import {authstore} from "$lib/stores/auth";
    import Error from "$lib/components/ui/Error.svelte";
    import Spinner from "$lib/components/ui/Spinner.svelte";
    import HeroLanding from "$lib/components/ui/HeroLanding.svelte";

    export let lockedState: boolean = true;
    let isComplete: boolean = false;
    let isLoading = false
    let isError = false
    const currentUser = authstore.getUser()

    let categories = [
        {"category": "Beginner Cook", "selected": false},
        {"category": "Kid Friendly", "selected": false},
        {"category": "Easy", "selected": false},
        {"category": "Lunch/Snacks", "selected": false},
        {"category": "Breakfast", "selected": false},
        {"category": "One Dish Meal", "selected": false},
        {"category": "Vegetable", "selected": false},
        {"category": "Brunch", "selected": false},
        {"category": "Fruit", "selected": false},
        {"category": "Inexpensive", "selected": false},
        {"category": "European", "selected": false},
        {"category": "Low Cholesterol", "selected": false},
        {"category": "Healthy", "selected": false},
        {"category": "Quick", "selected": false},
        {"category": "Dessert", "selected": false},
        {"category": "Main Dish", "selected": false},
        {"category": "Dinner Party", "selected": false},
        {"category": "Lunch", "selected": false},
        {"category": "Vegetarian", "selected": false},
        {"category": "Asian", "selected": false},
        {"category": "Italian", "selected": false},
    ]

    function getSelectedCategories(categories) {
        return categories.filter(category => category.selected).map(item => item.category);
    }



    $: isFinishedSelecting = categories.filter(category => category.selected).map(item => item.category).length < 3
    export let onSubmit = async function (e) {
        isLoading = true
        e.preventDefault()
        console.log(getSelectedCategories(categories))
        console.log(isFinishedSelecting)

        try {
            const selectedCategories = getSelectedCategories(categories);
            if (!currentUser) return
            currentUser.interestedCategory = selectedCategories
            const updateResult = await authstore.update(currentUser)
            isLoading = false
            console.log(currentUser, updateResult)
            if (updateResult.message === "success") {
                lockedState = false
                isComplete = true
            } else {
                isError = true
            }
        } catch (e) {
            isError = true
        }
        isComplete = true
    }

</script>

<form on:submit={onSubmit}>
    {#if !isComplete}
        <span class="h4 font-medium my-2 ">
        Select at least 3 topics which you feel interested in.
    </span>
        <div class="w-full lg:w-5/6 mx-auto mt-5">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {#each categories as category }
                    <ul class="mx-2 mt-2 ">
                        <li>
                            <input type="checkbox" id="{category.category}"  on:change={() => {category.selected = !category.selected;}}
                                   class="hidden peer" required="">
                            <label for="{category.category}"
                                   class="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block w-full">
                                    <div class="w-full text-sm font-semibold">{category.category}</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                {/each}
            </div>
        </div>
        <div class="flex flex-row justify-end w-full mx-1">
            <button class="btn variant-filled-primary m-3 font-semibold text-white"
                    disabled='{isFinishedSelecting}' type="submit">
                Submit
            </button>
        </div>
    {:else if isLoading}
        <Spinner/>
    {:else if isError}
        <Error/>
    {:else }
        <HeroLanding title="{`Welcome  ${currentUser.username}`}"/>
    {/if}

</form>
