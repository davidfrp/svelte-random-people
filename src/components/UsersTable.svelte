<script>
    import TableHead from "./TableHead.svelte";
    import TableRow from "./TableRow.svelte";

    import { escape } from "svelte/internal";

    export let tableData = [];
    export let dangerouslyAllowedColumns = [];

    $: columnNames = Object.keys(tableData[0] || {}).map((header) =>
        header
            .split(/(?=[A-Z])/)
            .join(" ")
            .toUpperCase()
    );

    $: rows = tableData.map((row) => {
        let rowData = [];
        for (let [key, value] of Object.entries(row)) {
            value = dangerouslyAllowedColumns.includes(key)
                ? value
                : escape(value);

            rowData = [...rowData, value];
        }
        return rowData;
    });
</script>

{#if tableData.length > 0}
    <table>
        <TableHead {columnNames} />
        {#each rows as rowData}
            <TableRow {rowData} />
        {/each}
    </table>
{/if}

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
</style>
