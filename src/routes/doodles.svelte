<script context="module">
	import { browser, dev } from '$app/env';

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
	<title>The Doodles</title>
</svelte:head>

<div class="content">
	<h1 style:margin-bottom="0.5rem">The Doodles Tell All</h1>
	<h2 style:font-family="var(--fira-mono)" style:margin-bottom="2rem">The Parents</h2>

	<div id="doodles">
		<div class="doodle">
			<picture>
				<source srcset="/dogs/sam.webp" type="image/webp" />
				<img src="/dogs/sam.png" alt="Sam" />
			</picture>
			<h2>Samson</h2>
			<strong>F1 Goldendoodle</strong>
		</div>
		<div class="doodle">
			<picture>
				<source srcset="/dogs/delilah.webp" type="image/webp" />
				<img src="/dogs/delilah.png" alt="Delilah" />
			</picture>
			<h2>Delilah</h2>
			<strong>F1B Goldendoodle</strong>
		</div>
	</div>
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
		grid-template: 1fr 1fr / auto;
		grid-gap: 1rem;
		width: 100%;
	}

	.doodle {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 100%;
	}

	h2 {
		margin: 0;
	}

	@media (min-width: 480px) {
		#doodles {
			grid-template: auto / 1fr 1fr;
		}
	}
</style>
