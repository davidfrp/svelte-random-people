<script>
    export let data = [];
</script>

<tr>
    {#each Object.values(data) as cellData}
        <td>{cellData}</td>
    {/each}
</tr>

<style>
    tr:nth-child(even) {
        background-color: #f2f2f2
    }

    td {
        padding: 0.5rem;
    }
</style>