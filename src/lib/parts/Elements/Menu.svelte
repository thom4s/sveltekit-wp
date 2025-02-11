<script>
    import { menusStore } from "$lib/config/website";
    import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
    import { device } from "$stores/device";

	const dispatch = createEventDispatcher();

    export let menuItems = [];
    let border, menuOuter;

    const menuItemClicked = () => {
		dispatch('menuItemClicked');
    }

    $: pathname = $page.url.pathname + '/';

    const handleIn = event => {
        if( ! event.target.classList.contains('active') && $device === "desktop") {

            let itemRect = event.target.getBoundingClientRect();
            let menuRect = event.target.parentNode.getBoundingClientRect();
            let leftPos = itemRect.left - menuRect.left;
            let width = itemRect.width - 5;

            border.style.transform = "translateX(" + leftPos + "px)";
            border.style.width = width + "px";
        }
    }

    const handleOut = () => {
        border.style.width = '0px';
    }

</script>


<nav bind:this={menuOuter} class="menu-outer">
    <ul class="">
        {#await menuItems}
            
        {:then menuItems }

            {#key menuItems}
                {#each menuItems.nodes as item}
                    <li class:active={pathname == item.path} on:mouseenter={ handleIn } on:mouseleave={ handleOut }>
                        <a href="{item.path}" data-text="{item.label}" class="menu-link" on:click={ () => menuItemClicked() }>{item.label}</a>
                    </li>
                {/each}
            {/key}
        {/await}

        <div bind:this={border} class="border"></div>

    </ul>
</nav>



<style lang="scss">

ul {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;

    @include max(large) {
        gap: 40px;
    }
    @include min(large) {
        gap: 30px;
    }
    
    li {
        position: relative;
        display: inline-block;
    }

    a {
        padding: 0;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        line-height: 1;
        position: relative;

        &::after {
                content: attr(data-text);
                content: attr(data-text) / "";
                height: 0;
                visibility: hidden;
                overflow: hidden;
                user-select: none;
                pointer-events: none;
                font-weight: 900;
        }

        &:hover {
            font-weight: 500;
        }

    }

    @include max(large) {
        flex-direction: column;
        align-items: flex-start;

        a {
            padding-left: 0;
        }
    }
}
.active {
    pointer-events: none;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 5px;
        bottom: -4px;
        height: 1px;
        background-color: black;
    }
    a {
        font-weight: 500;
    }
}

    .border {
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 1px;
        background-color: #333;
        transition: transform 0.3s ease, width 0.3s ease;
        z-index:-1;
    }

</style>