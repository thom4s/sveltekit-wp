<script>
    export let label = '';
    export let name = '';
    export let value = '';
    export let required = false;
</script>


    <div class="input-group checkbox fl-center gap-xs" data-name="{name}">
        <input 
            class="" 
            class:input-required={required} 
            aria-required="{required}" 
            aria-invalid="false" 
            value="{value}" 
            type="checkbox" 
            name="{name}"
        >
        <label class="body" for={name}>{label}</label>
    </div>


<style lang="scss">

</style>