<script>
	import PeopleTable from './components/PeopleTable.svelte';
	import peopleService from './services/peopleServices';

	const data = peopleService();
</script>

<main>
	<h1>Hi Heather!</h1>
	{#await data.findAllPaged(1, 10)}
		<p>...waiting</p>
	{:then people}
		<PeopleTable tableData={people} />
	{/await}
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	h1 {
		text-align: center;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>