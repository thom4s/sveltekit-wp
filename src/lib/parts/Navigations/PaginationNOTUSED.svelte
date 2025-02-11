<script lang="ts">
	import { page } from "$app/stores";
    import { getAllPosts } from "$lib/queries/posts";

    export let posts = []
    export let pageInfo = []


    const getPrevPosts = async () => {
        const firstPost = posts.edges[0];
        const firstPostCursor = firstPost.cursor;
        const prevPosts = await getAllPosts('fr', 'last', 'before', firstPostCursor)
        return prevPosts;
    }
    const getNextPosts = async () => {
        const lastPost = posts.edges.at(-1);
        const lastPostCursor = lastPost.cursor;
        const nextPosts = await getAllPosts('fr', 'first', 'after', lastPostCursor)
        return nextPosts;
    }

</script>

<div class="pagination">
    <button 
        class="prev" 
        disabled={!pageInfo.hasPreviousPage}
        on:click={ async () => {
            posts = await getPrevPosts();
        }}
    >Prev</button>
    
    <button 
        class="prev"
        disabled={!pageInfo.hasNextPage}
        on:click={ async () => {
            posts = await getNextPosts();

        }}
    >Next</button>
</div>

total : {pageInfo.total}


<style lang="scss">


</style>