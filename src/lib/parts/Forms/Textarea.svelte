<script>
    export let label = '';
    export let name = '';
    export let value = '';
    export let placeholder = '';
    export let required = false;
</script>


<p>
    <label for={name}>{label}<br>
        <span class="" data-name="{name}">
            <textarea 
                cols="40" rows="10" 
                class="" 
                class:input-required={required} 
                autocomplete="name" 
                aria-required="{required}" 
                aria-invalid="false" 
                placeholder={placeholder}
                name="{name}"
            >
                {value}
            </textarea>
        </span> 
    </label>
</p>