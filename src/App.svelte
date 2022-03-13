<script>
	import PeopleTable from './components/PeopleTable.svelte';
	import peopleService from './services/peopleServices';

	const data = peopleService();
	
	let people = [];
	let currentPage = 1;
	let hasReachEnd = false;
	
	async function handleClick() {
		const newPeople = await data.findAllPaged(currentPage, 50);
		if (newPeople.length > 0) {
			people = [...people, ...newPeople];
			currentPage++;
		} else {
			hasReachEnd = true;
		}
	}

	handleClick();
</script>

<main>
	<h1>Random people data</h1>
	<PeopleTable tableData={people} />
	<div id="status">
		{#if hasReachEnd}
			<p>No more data to load</p>
		{:else}
			<button on:click={handleClick}>Load more</button>
		{/if}
	</div>
</main>

<style>
	#status {
		text-align: center;
		margin: 2rem 0;
	}

	main {
		padding: 1em;
		max-width: 1200px;
		margin: 0 auto;
	}
	
	h1 {
		text-align: center;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>