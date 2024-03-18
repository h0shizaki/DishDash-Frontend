<script lang="ts">
    import SearchBar from "./Searchbar.svelte";
    import SearchSuggestion from "./SearchSuggestion.svelte";
    export let query = '';


</script>

    <SearchBar bind:query on:search />
    <SearchSuggestion bind:query />