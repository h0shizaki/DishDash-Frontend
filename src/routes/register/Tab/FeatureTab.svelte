<script lang="ts">
import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
let tabSet: number = 0;

</script>

<TabGroup>
    <Tab bind:group={tabSet} name="tab1" value={0}>
        <span>Discover Recipes</span>
    </Tab>
    <Tab bind:group={tabSet} name="tab2" value={1}>Bookmark your favorite one</Tab>
    <svelte:fragment slot="panel">
        {#if tabSet === 0}
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Embark on a Culinary Journey with Discover Recipes! 🍽️ Unveil a world of flavors at your fingertips with our intuitive platform. Explore personalized recommendations, trending recipes, and your own bookmarked favorites effortlessly. From mouthwatering mains to delectable desserts, Discover Recipes has something for every palate. Dive into a universe of culinary inspiration today! 🌟
            </p>
        {:else if tabSet === 1}
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Never Lose a Flavorful Moment Again with Bookmark Your Favorites! 📚 Say goodbye to forgotten recipes and hello to culinary convenience. With Bookmark Your Favorites, savor every dish you love in one organized hub. Whether it's Grandma's secret sauce or the latest food trend, easily save and access your go-to recipes with a simple click. Don't let delicious discoveries slip away – start bookmarking today! 🍴 Visit BookmarkYourFavorites.com and keep your culinary treasures close at hand!
            </p>
        {/if}
    </svelte:fragment>
</TabGroup>