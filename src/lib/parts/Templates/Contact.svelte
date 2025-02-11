<script lang="ts">
    import Form from "$lib/parts/Forms/Form.svelte";
    
    export let page = {};

</script>


<div class="container container-contact">

    <div class="grid">
        
        <div class="s_12column m_3column">
            <!-- <h1 class="h1">{page.title}</h1> -->
            <div class="contact-txt">{@html page.content}</div>
        </div>

        <div class="s_12column m_9column">
            <Form />
        </div>
    </div>

</div>


<style lang="scss">
    .container {
        padding: 60px 0;

        .h1 {
            margin-top: 0;
        }

        .grid {
            @include max(tablet) {
                row-gap: 60px;
                column-gap: 0;
            }
        }
    }
</style>