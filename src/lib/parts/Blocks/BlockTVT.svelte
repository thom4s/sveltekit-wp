<script>
    import { fullscreen, fullScreenContent, fullScreenType } from '$stores/fullscreen.js';

    export let visuel = '';
    export let texte = '';
    export let design = 'full';
    export let ratio = 'horizontale';
    export let parallax = true;

    import Image from "$lib/parts/Elements/Image.svelte";

</script>

<section class="module mod_tvt fl-column media-{design}" data-ratio="{ratio}">

    {#if texte !== null }
        <div class="wrapper_txt">
            <div class="mod_tvt_txts">
                <div class="body">
                    {@html texte}
                </div>
            </div>
        </div>
    {/if}

    <div class="wrapper_media">
        <div class="mod_tvt_media">

            <Image 
                node={visuel?.node} 
                fullscreened={true}
                hoverTarget={true}
                includeThis={true}
                ratio="{ratio}"
                parallax={false}
                on:imageClicked={ () => {
                    $fullscreen = true;
                    $fullScreenType = 'slide';
                }}
            />

        </div>
    </div>

</section>


<style lang="scss">


    .mod_tvt {
        justify-content: space-between;
        width: 100%;

        @include min(medium) {
            margin-bottom: $space-xxl * 2;
        }
        @include max(medium) {
            margin-bottom: $space-xl * 2;
        }
        img {
            width: 100% !important;
        }
    }

    :global(.media-full img) {
        width: 100% !important;
        @include min(large) {
            max-height: 80vh;
        }
    }

    :global(.media-full .wrapper_txt) {
        @include min(medium) {
            padding-bottom: $space-xl;
        }
        @include max(medium) {
            padding-bottom: $space-m;
        }
    }
    .media-left {
        display: flex;

        @include max(medium) {
            flex-direction: column;
            .wrapper_txt {
                margin-bottom: $space-m;
            }
        }
        @include min(medium) {
            flex-direction: row-reverse;
            align-items: center;

            .wrapper_txt {
                width: 50%;
                flex: 0 0 50%;
            }

            .wrapper_media {
                width: 50%;
                flex: 0 0 50%;
            }
        }
    }

    .media-right {
        display: flex;
        flex-direction: row;

        @include max(medium) {
            flex-direction: column;
            .wrapper_txt {
                margin-bottom: $space-m;
            }
        }
        @include min(medium) {
            flex-direction: row;
            align-items: center;

            .wrapper_txt {
                width: 50%;
                flex: 0 0 50%;
            }
            .wrapper_media {
                width: 50%;
                flex: 0 0 50%;
            }
        }

    }

</style>