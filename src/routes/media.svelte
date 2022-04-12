<script lang="ts">
	export const prerender = true;
</script>

<div class="content">
	<h1>The Doodles Tell All</h1>
	<a href="https://form.jotform.com/220944254673156">Apply to Adopt</a>
	<hr />
	<h1>Under Construction</h1>
</div>

<style>
	#doodles {
		display: grid;
		grid-template: auto / auto;
		grid-gap: 1rem;
		width: 100%;
	}
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	a {
		color: var(--primary-color);
		padding: 1rem;
		background: var(--heading-color);
		text-align: center;
		border-radius: 10px;
		transition: box-shadow 400ms ease-in-out;
	}

	a:hover {
		text-decoration: none;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
		transition: box-shadow 400ms ease-in-out;
	}

	hr {
		width: 100%;
		color: var(--accent-color);
		margin: 1rem;
	}

	@media (min-width: 480px) {
		#thumbs {
			grid-template: auto / 1fr 1fr 1fr;
		}
	}
</style>
