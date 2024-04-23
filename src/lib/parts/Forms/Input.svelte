<script>
    export let label = '';
    export let name = '';
    export let type = '';
    export let value = '';
    export let placeholder = '';
    export let required = false;
</script>


<p>
    <label for={name}>{label}<br>
        <span class="" data-name="{name}">
            {#if type === 'file' }
                <input 
                    class="" 
                    class:input-required={required} 
                    autocomplete="name" 
                    aria-required="{required}" 
                    aria-invalid="false" 
                    value="{value}" 
                    type="{type}" 
                    placeholder={placeholder}
                    name="{name}"
                    accept="audio/*,video/*,image/*"
                >
            {:else}
                <input 
                    class="" 
                    class:input-required={required} 
                    autocomplete="name" 
                    aria-required="{required}" 
                    aria-invalid="false" 
                    value="{value}" 
                    type="{type}" 
                    placeholder={placeholder}
                    name="{name}"
                >
            {/if}

        </span> 
    </label>
</p>