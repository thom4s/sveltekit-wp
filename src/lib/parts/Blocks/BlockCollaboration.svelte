<script>
    import Image from "$lib/parts/Elements/Image.svelte";

    export let post = {};
    export let type = '';
</script>


<article class="block_collaboration">

    <div class="block_inner fl-justify gap-l">

        <div class="bloc_texts fl-column-space">

            <div class="caption">{post.informationsCollaboration.date}</div>
            
            <div class="fl-column-space gap-s">  
                <h2 class="h3 no-margin">{@html post.title}</h2>
                <div class="body">{@html post.excerpt}</div>
            </div>
            
            <div>
                {#if post.informationsCollaboration.lien }
                    <a class="link" target="_blank" href="{post.informationsCollaboration.lien}">
                        {post.informationsCollaboration.label}
                    </a>
                {/if}
            </div>
        </div>

        <div class="bloc_media">
            <Image node={post.featuredImage?.node} />
        </div>

    </div>

</article>


<style lang="scss"> 
.block_collaboration {
    border-top: 1px solid;
    padding: 20px 0;

    .block_inner {
        @include max(tablet) {
            flex-direction: column;
            gap: $space-s;
        }
    }

    &:nth-child(even) .bloc_media {
        @include min(tablet) {
            order: -1;
        }
    }

    .bloc_texts {
        @include min(tablet) {
            width: 55%;
        }
        gap: $gutter;
    }
    .bloc_media {
        @include min(tablet) {
            width: 45%;
        }
        height: 100%;
    }
}
</style>