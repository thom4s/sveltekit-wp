<script>
    export let menuItems = []
    export let menuItemsSecondary = []
</script>

<header>
    <div class="container">
        <nav>
            <ul>
                {#each menuItems.nodes as item}
                    <li><a href="{item.path}">{item.label}</a></li>
                {/each}
            </ul>
        </nav>

        <h1><a href="/">My Site</a></h1>

        <nav>
            <ul>
                {#each menuItemsSecondary.nodes as item}
                    <li><a href="{item.path}">{item.label}</a></li>
                {/each}
            </ul>
        </nav>

    </div>
</header>



<style lang="scss">

    header {
        margin-bottom: 80px;
        border-bottom: 1px solid;
        padding-bottom: 40px;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }

    ul {
        display: flex;
        gap: 10px;
        list-style: none;
        margin: 0;
        padding: 0;

        a {
            padding: 10px;
        }
    }

</style>