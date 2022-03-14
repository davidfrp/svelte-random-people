<script>
    export let label = "";
    export let options = [];
    export let onChange;
</script>

<div class="dropdown">
    <label for={label}>{label}</label>
    <select id={label} on:change={(e) => onChange(e.target.value)}>
        {#each options as option, i}
            <option value={i}>{option}</option>
        {/each}
    </select>
</div>

<style>
    .dropdown {
        position: relative;
        display: inline-block;
        border-radius: 0.3rem;
        margin: 0.5rem 0;
        color: #ff3e00;
    }

    .dropdown:hover, .dropdown:active {
        background-color: #1f2223;
    }

    label {
        pointer-events: none;
        position: absolute;
        transform: translate(1rem, 0.5rem);
        text-transform: uppercase;
        letter-spacing: 0.075rem;
        font-weight: bold;
        font-size: 0.8rem;
        color: #839195;
    }

    select {
        width: 100%;
        padding: 1.5rem 0.75rem 0.5rem;
    }
    
    option {
        background: inherit;
        padding: 2.5rem 1.5rem;
        margin-top: 1rem;
        color: #1f2223;
    }
</style>