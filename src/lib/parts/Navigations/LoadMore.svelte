<script lang="ts">
    import { getAllPressArticles } from "$lib/queries/press";
    import { getAllPosts } from "$lib/queries/posts";

    export let posts = []
    export let pageInfo = []
    export let contentType = ''

    const loadMorePosts = async () => {
        const length = posts.edges.length;
        let newPosts
        if( contentType === 'presse') {
            newPosts = await getAllPressArticles('fr', length + 6)
        }
        else if (contentType === 'news') {
            newPosts = await getAllPosts('fr', length + 6)
        }
        else {
            newPosts = await getAllPosts('fr', length + 6) 
        }
        return newPosts;
    }
</script>


{#if pageInfo.hasNextPage}
    <div class="pagination">
        <button 
            class="btn dark" 
            on:click={ async () => {
                posts = await loadMorePosts();
            }}
        >Load More</button>
    </div>
{/if}

<style lang="scss">


</style>