<script>
    export let tableData = [];
</script>

<table>
    <tr>
        {#each Object.keys(tableData[0]) as row}
            <td>{row}</td>
        {/each}
    </tr>
    {#each tableData as rowData}
        <tr>
            {#each Object.values(rowData) as cellData}
                <td>{cellData}</td>
            {/each}
        </tr>
    {/each}
</table>
