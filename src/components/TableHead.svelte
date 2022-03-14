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
        background-color: #181a1b;
        text-transform: capitalize;
        text-align: left;
        padding: 0.75rem;
        position: sticky;
        top: 0;
    }
</style>