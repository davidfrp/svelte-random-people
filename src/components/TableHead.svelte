<script>
    export let columnNames = [];
</script>

<thead>
    <tr>
        {#each columnNames as columnName}
            <th>{columnName}</th>
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
