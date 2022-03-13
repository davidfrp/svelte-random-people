<script>
    export let data = [];
</script>

<thead>
    <tr>
        {#each Object.keys(data[0]) as cellData}
            <th>{cellData.split(/(?=[A-Z])/).join(' ')}</th>
        {/each}
    </tr>
</thead>

<style>
    th {
        text-transform: capitalize;
        text-align: left;
        padding: 0.5rem;
    }
</style>