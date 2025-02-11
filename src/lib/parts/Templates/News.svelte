<script lang="ts">
    import BlockPost from "$lib/parts/Blocks/BlockPost.svelte";
    import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import SocialLinks from "$lib/parts/Navigations/SocialLinks.svelte"
	import LoadMore from "$lib/parts/Navigations/LoadMore.svelte";

    export let page = {};
    export let posts = [];

</script>


<article class="template" data-template="News">

    <div class="container">
        <div class="grid">
    
            <div class="s_12column m_3column">
                <!-- <h1>{page.title}</h1> -->
    
                <div class="sticky fl-column-space gap-xs">
                    <div class="">
                        <div class="mb-small">
                            <p>Retrouvez tous nos événements sur nos réseaux sociaux</p>
                        </div>
                        <SocialLinks />
                    </div>
                </div>
    
            </div>
    
            <div class="s_12column m_9column">
                {#each posts.edges as post }
                    <BlockPost post={post.node} type="posts"/>
                {/each}
    
                <LoadMore bind:posts={posts} pageInfo={posts.pageInfo} contentType="news"/>

            </div>
    
        </div>
    </div>

</article>



<PushContact />


<style lang="scss">
    article {
        padding-top: $space-xxl;
    }
</style>