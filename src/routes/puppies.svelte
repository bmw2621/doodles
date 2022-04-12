<script context="module">
	import { browser, dev } from '$app/env';
	import { puppies } from '$lib/constants';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>The Puppies</title>
</svelte:head>

<div class="content">
	<h1>The Doodles Tell All</h1>
	<a href="https://form.jotform.com/220944254673156">Apply to Adopt</a>
	<hr />
	{#each Object.keys(puppies) as litter}
		<h2 style:margin-bottom="0">{litter}</h2>
		<strong style:margin-bottom="1rem">{puppies[litter].breed}</strong>
		<div id="doodles">
			{#each puppies[litter].puppies as puppy}
				<div
					class="doodle"
					style:background={`url(${puppy.imgUrl})`}
					style:background-size="contain"
					style:background-position="center"
				>
					<img
						class="adopted"
						style:filter={puppy.adopted ? 'opacity(1)' : 'opacity(0)'}
						src="adopted.png"
						alt=""
					/>
					<h2 class="puppy-name">{puppy.name}</h2>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	#doodles {
		display: grid;
		grid-template: auto / auto;
		grid-gap: 1rem;
		width: 100%;
	}

	.doodle {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	img {
		width: 100%;
	}

	.puppy-name {
		margin: 0;
		color: var(--pure-white);
		position: absolute;
		bottom: 20px;
		text-shadow: 3px 3px 6px var(--heading-color);
	}

	.adopted {
		width: 100%;
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
		#doodles {
			grid-template: auto / 1fr 1fr 1fr;
		}
	}
</style>
