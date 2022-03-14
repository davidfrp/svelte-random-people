<script>
    export let rowData = [];
</script>

<tr>
    {#each rowData as cellData}
        <!-- Gets sanitized in UsersTable component. -->
        <td>{@html cellData}</td>
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