<script lang="ts">
    import {Autocomplete, InputChip} from "@skeletonlabs/skeleton";
    import type {AutocompleteOption} from "@skeletonlabs/skeleton"
    export let userFolders: Array<string> = ['one', 'two', 'three', 'four', 'five', 'six']
    let inputChip = ''
    export let inputChipList = []

    type FlavorOption = AutocompleteOption<string, { selected: boolean }>;
    const flavorOptions: FlavorOption[] = []

    userFolders.forEach(element => {
        flavorOptions.push({label: element, value: element, keywords: element})
    })

    function onInputChipSelect(event: CustomEvent<FlavorOption>): void {
        console.log('onInputChipSelect', event.detail);
        if (inputChipList.includes(event.detail.value) === false) {
            inputChipList = [...inputChipList, event.detail.value];
            inputChip = '';
        }
    }

</script>
<InputChip bind:input={inputChip} bind:value={inputChipList} name="chips"/>
<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
    <Autocomplete
            emptyState="No result found please create a new one."
            bind:input={inputChip}
            options={flavorOptions}
            denylist={inputChipList}
            on:selection={onInputChipSelect}
    />
</div>
