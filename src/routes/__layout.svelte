<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Icon from 'svelte-awesome';
	import { instagram } from 'svelte-awesome/icons';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<a href="#"><Icon data={instagram} scale={3} /></a>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
	}

	footer a {
		font-weight: bold;
		margin: 0;
	}

	@media (min-width: 480px) {
		footer {
			display: none;
		}
	}
</style>
