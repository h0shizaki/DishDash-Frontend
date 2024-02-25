<script lang="ts">
    export let lockedState: boolean = true;


    export let onSubmit = async function() {
        console.log("I'm the handleOnSubmit() in App.svelte")
    }

    let categories = [
        {"category": "Beginner Cook", "selected": false},
        {"category": "Kid Friendly", "selected": false},
        {"category": "South American", "selected": false},
        {"category": "Cheese", "selected": false},
        {"category": "Easy", "selected": false},
        {"category": "Lunch/Snacks", "selected": false},
        {"category": "Breakfast", "selected": false},
        {"category": "One Dish Meal", "selected": false},
        {"category": "Vegetable", "selected": false},
        {"category": "Brunch", "selected": false},
        {"category": "Fruit", "selected": false},
        {"category": "Inexpensive", "selected": false},
        {"category": "Toddler Friendly", "selected": false},
        {"category": "European", "selected": false},
        {"category": "Low Cholesterol", "selected": false},
        {"category": "Low Protein", "selected": false},
        {"category": "Healthy", "selected": false},
        {"category": "Quick", "selected": false},
        {"category": "Dessert", "selected": false},
        {"category": "Main Dish", "selected": false},
        {"category": "Dinner Party", "selected": false},
        {"category": "Lunch", "selected": false},
        {"category": "Vegetarian", "selected": false},
        {"category": "Asian", "selected": false},
        {"category": "Mexican", "selected": false},
        {"category": "American", "selected": false},
        {"category": "Italian", "selected": false},
        {"category": "French", "selected": false},
        {"category": "Indian", "selected": false},
        {"category": "Mediterranean", "selected": false},
        {"category": "Chinese", "selected": false},
        {"category": "Japanese", "selected": false}
    ]

    const trueCount = categories.reduce((count, category) => {
        return count + (category.selected ? 1 : 0);
    }, 0);

    

</script>

<form action="#" on:submit={onSubmit}>
    <span class="h4 font-medium my-2 ">
        Select at least 3 topics which you feel interested in.
    </span>
    <div class="w-2/3 mx-auto mt-5">
            <div class="grid grid-cols-4">  
                {#each  categories as category }
                <ul class="mx-2 mt-2 ">
                    <li>
                        <input type="checkbox" id="{category.category}" value="{category.selected}" class="hidden peer" required="">
                        <label for="{category.category}" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                            <div class="block w-full">
                                <div class="w-full text-lg font-semibold">{category.category}</div>
                            </div>
                        </label>
                    </li>
                </ul>	
                {/each}		
            </div>

    </div>
</form>
