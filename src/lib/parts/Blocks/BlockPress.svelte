<script>
    import Image from "$lib/parts/Elements/Image.svelte";

    export let post = {};
</script>


<article class="block_press">

            <div class="block_media mb-xsmall">
                <Image node={post.featuredImage?.node} />
            </div>

            <div class="block_meta fl-justify mb-xsmall">
                <span class="caption">{post.informationsPress?.date}</span>

                {#if post.informationsPress?.author}
                    <span class="caption">{post.informationsPress?.author}</span>
                {/if}
            </div>
            
            <div class=" mb-xxsmall">  
                <h2 class="block_title body">
                    <span class="mb-0">{post.informationsPress?.magazineName}</span>
                    <span>{post.title}</span>
                </h2>
            </div>
            
            {#if post.informationsPress?.lien }
                <a href="{post.informationsPress?.lien}" class="link" target="_blank">
                    {post.informationsPress?.label}
                </a>
            {/if}


</article>


<style lang="scss"> 
    .block_title {
        span {
            display: block;
        }
    }
    .link {
        font-weight: 500;
    }
</style>