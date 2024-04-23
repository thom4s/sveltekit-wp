<script>

    export let post = {};
    export let type = '';
    
</script>


<article class="block">
    <h2>{post.title}</h2>
    <div>{@html post.excerpt}</div>
    <a href="/{type}/{post.slug}">En savoir plus</a>
</article>