<script>
	import PeopleTable from './components/PeopleTable.svelte';
</script>

<main>
	<h1>Hi Heather!</h1>
	<PeopleTable tableData={[
		{
			name: 'Heather',
			age: '24',
			occupation: 'Student',
			location: 'Bristol, England'
		}
	]} />
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