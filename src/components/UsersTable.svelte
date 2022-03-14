<script>
    import TableHead from "./TableHead.svelte";
    import TableRow from "./TableRow.svelte";
    export let tableData = [];
    export let dataMapper = (data) => data;

    $: tableData = tableData.map(dataMapper);
</script>

{#if tableData.length > 0}
    <table>
        <TableHead data={tableData} />
        {#each tableData as rowData}
            <TableRow data={rowData} />
        {/each}
    </table>
{/if}

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
</style>
