<script lang="ts">
    import {Autocomplete} from '@skeletonlabs/skeleton';
    import type {AutocompleteOption} from '@skeletonlabs/skeleton';
    import recipeService from "$lib/api/RecipeService";
    import type {TextSuggestion} from "$lib/models/TextCorrection";

    export let query: string;
    // export let isSuggesting = false

    // let suggestPhrase ;
    let flavorOptions: AutocompleteOption<string>[] = [];

    const onFlavorSelection = (event: CustomEvent<AutocompleteOption<string>>) => {
        query = event.detail.label
    }

    function combineSuggestions(suggestions) {
        const combinedPhrases = [];
        for (const suggestion of suggestions) {
            const topSuggestions = getTopSuggestions(suggestion.candidates, suggestion.text);
            if (combinedPhrases.length === 0) {
                combinedPhrases.push(...topSuggestions.map(s => [s]));
            } else {
                const newPhrases = [];
                for (const existingPhrase of combinedPhrases) {
                    for (const topSuggestion of topSuggestions) {
                        newPhrases.push([...existingPhrase, topSuggestion]);
                    }
                }
                combinedPhrases.splice(0, combinedPhrases.length, ...newPhrases);
            }
        }
        return combinedPhrases.map(phrase => phrase.join(' '));
    }

    function getTopSuggestions(candidates, text) {
        if (candidates.length === 0) return [text];
        const totalScore = candidates.reduce((acc, curr) => acc + curr.score, 0);
        return candidates
            .sort((a, b) => b.score - a.score)
            .slice(0, 2) // Get top 2 suggestions
            .map(candidate => candidate.text)
            .filter((_, index) => index < 2 || candidates[index].score / totalScore >= 0.3);
    }

    export let suggestions: string[] = []

    const fetchNewSuggestion = async () => {
        if (!query || query.length < 3) return

        const resp = await recipeService.spellCorrection(query)
        const rawSuggestions: Array<TextSuggestion> = resp.data.result
        let tempSuggestions = combineSuggestions(rawSuggestions)
        if(tempSuggestions.includes(query.toLowerCase().trim())){
            tempSuggestions.splice(tempSuggestions.indexOf(query.toLowerCase().trim()),1)
        }
        suggestions = tempSuggestions
        console.log(suggestions)

    }

    $: query, fetchNewSuggestion()
    $: isSuggesting = suggestions.length > 0 && query.length > 2
</script>

{#if isSuggesting}
    <div class="absolute justify-center z-40">
        <div
                id="dropdown"
                class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto flex flex-col "
        >
            {#each suggestions as suggest}
                <button class="btn w-full justify-start hover:text-blue-500 " on:click={() => {query = suggest}}>
                    {suggest}
                </button>
            {/each}
        </div>
    </div>

    <!--    <div class="flex justify-center">-->
    <!--        <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">-->

    <!--            &lt;!&ndash;        <Autocomplete bind:input={query} options={flavorOptions} on:selection={onFlavorSelection}/>&ndash;&gt;-->
    <!--        </div>-->
    <!--    </div>-->
{/if}
