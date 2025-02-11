<script>
    export let label = '';
    export let name = '';
    export let value = '';
    export let placeholder = '';
    export let required = false;
    export let size = 'full';

</script>


<div class={'input-group ' + size} data-name="{name}">
    <textarea 
        cols="40" rows="10"
        class="body"
        class:input-required={required} 
        autocomplete="name" 
        aria-required="{required}" 
        aria-invalid="false" 
        placeholder=" "
        name="{name}"
    >{value}</textarea>
    <label class="caption" for={name}>{placeholder}</label>
</div>


<style lang="scss">
    textarea {
        resize: vertical;
    }
</style>