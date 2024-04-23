<script>
    export let label = '';
    export let name = '';
    export let value = '';
</script>


<p>
    <label for={name}>{label}<br>
        <span class="" data-name="{name}">
            <button 
                class="" 
                name="{name}"
            >
                {value}
            </button>   
        </span> 
    </label>
</p>