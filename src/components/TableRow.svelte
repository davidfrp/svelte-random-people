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
        background-color: #1f2223;
    }

    td {
        padding: 0.75rem;
    }
</style>