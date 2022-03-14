<script>
	import UserTable from './components/UsersTable.svelte';
	import LoadingIcon from './components/LoadingIcon.svelte';
	import userService from './services/userService';

	const service = userService();

	let page = 1;
	let perPage = 10;
	
	let isLoading = false;
	let hasNoMoreData = false;
	
	let tableData = [];
	
	async function fetchData() {
		isLoading = true;
		
		const data = await service.findAllPaged(page, perPage);
		tableData = [...tableData, ...data];
		page++;

		if (data.length < perPage) {
			hasNoMoreData = true;
		}
		
		isLoading = false;
	}

	$: tableData = tableData.map((user) => ({
		...user, 
		avatar: `<img src="${user.avatar}" />`
	}));

	fetchData();
</script>

<main>
	<UserTable 
		{tableData} 
		dangerouslyAllowedColumns={['avatar']} />
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