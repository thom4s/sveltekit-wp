<script>
    import Image from "../Elements/Image.svelte";
    export let post = {};

</script>


<article class="block_page">

    <div class="fl-vcenter grid">

        <div class="s_12column m_6column bloc_media_outer">
            <div class="bloc_media">
                <Image node={post.featuredImage?.node} />
            </div>
        </div>

        <div class="s_12column m_6column bloc_texts_outer">
            <div class="bloc_texts">
                
                <div class="fl-column-start gap-m">  
                    <h2 class="h1 no-margin">{@html post.title}</h2>
                    <div class="body">{@html post.excerpt}</div>
                    <a class="link" href="{post.link}">En savoir plus</a>
                </div>
                
            </div>
        </div>

    </div>

</article>


<style lang="scss"> 
.grid {
    grid-column-gap: 0;
}
img {
    aspect-ratio: 5/4;
}
.bloc_texts {
    //max-width: 1040px;

    @include min(desktop) {
        padding-right: calc( calc(100vw - $max-width) / 2);
        padding-left: 120px;
    }
    @include max(desktop) {
        padding-left: 120px;
        padding-right: 120px;
    }
    @include max(bigtablet) {
        padding-left: $gutter * 2;
        padding-right: $gutter * 2;
    }
    @include max(tablet) {
        padding-left: 5vw;
        padding-right: 5vw;
    }
}
.bloc_media_outer {
    @include max(bigtablet) {
        order: 2
    }
}

</style>