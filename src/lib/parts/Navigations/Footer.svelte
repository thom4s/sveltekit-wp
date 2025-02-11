<script>
    import { menusStore } from "$lib/config/website";
    import SocialLinks from "$lib/parts/Navigations/SocialLinks.svelte";
    import Menu from "$lib/parts/Elements/Menu.svelte";

    $: ( {menuItemsPrimary, menuItemsFooter} = $menusStore)

</script>


<footer id="colophon" class="site-footer">
    <div class="wrapper">
        <div class="flex -space mb-l">

            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo">
                <img src="" alt="Logo">
            </a>

            <nav id="footer-navigation">
                <Menu menuItems={menuItemsPrimary} />
            </nav>

            <nav id="footer-navigation">
                <Menu menuItems={menuItemsFooter} />
            </nav>
        </div>

        <p id="copyright" class="txt-center">Copyright © Website </p>
    </div>
</footer><!-- #colophon -->



<style lang="scss">
    footer {
        margin-bottom: calc( var(--space-l) * 2 );
        position: relative;
        z-index: 9;
        background-color: $white;
        padding-top: var(--space-l);

        @include min(large) {
            margin-top: var(--space-l) ;
        }
        @include max(large) {
            margin-top: calc( var(--space-l) * 1.5 );
        }
    }
    .container {
        border-top: 1px solid;
        padding-top: var(--space-s)
    }
    nav {
        padding: 15px 0;
    }
    .nav_group {
        @include max(large) {
            flex-direction: column;
            gap: 40px;
        }
    }
</style>