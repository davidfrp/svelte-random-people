<script>
    export let tableData = [];
</script>

{#if tableData.length > 0}
    <table>
        <tr>
            {#each Object.keys(tableData[0]) as cellData}
                <th>{cellData}</th>
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
{/if}