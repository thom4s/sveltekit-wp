<script>
    export let label = '';
    export let name = '';
    export let type = '';
    export let value = '';
    export let placeholder = '';
    export let required = false;
    export let size = 'full';

</script>



<div class={'input-group ' + size} data-name="{name}">

    {#if type === 'file' }
        <input 
            class="" 
            class:input-required={required} 
            autocomplete="name" 
            aria-required="{required}" 
            aria-invalid="false" 
            value="{value}" 
            type="{type}" 
            name="{name}"
            accept="audio/*,video/*,image/*"
        >
    {:else}
        <input 
            class={"body " + (type === 'submit' ? 'btn dark' : '')} 
            class:input-required={required} 
            autocomplete="name" 
            aria-required="{required}" 
            aria-invalid="false"
            required={false}
            placeholder=" "
            value="{value}" 
            type="{type}" 
            name="{name}"
        >
    {/if}
    <label class="caption" for={name}> 
        {placeholder}
    </label>

</div>


<style lang="scss">


</style>