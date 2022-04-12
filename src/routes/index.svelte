<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="/dta.svg" type="image/svg+xml" />
				<img src="/dta.png" alt="Logo" />
			</picture>
		</div>
		The Doodles Tell All
	</h1>

	<a href="/puppies">Adopt a Doodle</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		width: 100%;
	}

	h1 {
		width: 100%;
		font-family: Satisfy;
		font-weight: bold;
		font-size: 5rem;
		margin-bottom: 1rem;
		text-shadow: 5px 5px 10px var(--primary-color);
	}
	picture {
		background: white;
		padding: 50px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
		box-shadow: 10px 10px 30px var(--primary-color) inset, 10px 10px 30px var(--heading-color);
	}

	.welcome {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.welcome img {
		border-radius: 50%;
		width: 90%;
		margin-bottom: 2rem;
	}

	a {
		color: var(--tertiary-color);
		padding: 1rem;
		background: var(--accent-color);
		text-align: center;
		border-radius: 10px;
		transition: box-shadow 400ms ease-in-out;
	}

	a:hover {
		text-decoration: none;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
		transition: box-shadow 400ms ease-in-out;
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 2.5rem;
		}
	}
</style>
