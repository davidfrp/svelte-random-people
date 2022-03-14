<script>
    import DropDown from "./components/DropDown.svelte";
    import UserTable from "./components/UsersTable.svelte";
    import LoadingIcon from "./components/LoadingIcon.svelte";
    import usersService from "./services/usersService";

    const service = usersService();

    let page = 1;
    let perPage = 10;

    let isLoading = false;
    let hasNoMoreData = false;

    let tableData = [];
    let compareFn;

    async function fetchData() {
        isLoading = true;

        let users = await service.findAll(page, perPage);
        
        users = users.items.map((user) => ({
            ...user,
            avatar: `<img class="avatar" src="${user.avatar}" alt="" />`,
        }));

        tableData = [...tableData, ...users];
        page++;

        if (users.length < perPage) {
            hasNoMoreData = true;
        }

        isLoading = false;
    }

    const sortingTypes = [
        { description: "Id, low to high", compareFn: (a, b) => a.id - b.id },
        { description: "Name, a to å", compareFn: (a, b) => a.name.localeCompare(b.name) },
        { description: "Creation date, new to old", compareFn: (a, b) => a.createdAt - b.createdAt }
    ];

    function handleSortTypeChange(i) {
        compareFn = sortingTypes[i].compareFn;
    }

    $: tableData = tableData.sort(compareFn);
    
    fetchData();
</script>

<main>
    <DropDown 
        label="Sort by"
        options={sortingTypes.map(opt => opt.description)}
        onChange={handleSortTypeChange} />
    <UserTable 
        {tableData}
        dangerouslyAllowedColumns={["avatar"]} />
    <div id="status">
        {#if isLoading}
            <LoadingIcon />
        {:else if hasNoMoreData}
            <p>No more data</p>
        {:else}
            <button on:click={fetchData}>
                Show more
            </button>
        {/if}
    </div>
</main>

<style>
    #status {
        text-align: center;
        margin: 3.5rem 0;
    }

    main {
        padding: 0 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
