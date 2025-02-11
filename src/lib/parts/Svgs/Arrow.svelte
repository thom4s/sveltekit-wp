<script>
    export let left = false;
</script>

<svg class:left={left} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8.62305H13.7559" stroke="black" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M9.5 4.12305L14 8.62305L9.5 13.123" stroke="black" stroke-linecap="square"/>
</svg>


<style lang="scss">
    .left {
        transform: rotate(180deg);
    }
</style>