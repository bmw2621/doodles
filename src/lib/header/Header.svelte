<script lang="ts">
	import { page } from '$app/stores';
	import Icon from 'svelte-awesome';
	import { bars, instagram } from 'svelte-awesome/icons';

	interface SiteLink {
		path: string;
		label: string;
	}

	const siteLinks: SiteLink[] = [
		{ path: '/', label: 'Home' },
		{ path: '/doodles', label: 'Doodles' },
		{ path: '/puppies', label: 'Puppies' },
		{ path: '/media', label: 'Media' }
	];

	let showMobileNav = false;
</script>

<header>
	<div class="corner">
		<!-- <a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a> -->
	</div>

	<nav>
		<ul id="mobileNav" style:margin-top={showMobileNav ? 0 : `-${siteLinks.length * 3}rem`}>
			{#each siteLinks as siteLink}
				<li class:active={$page.url.pathname === siteLink.path}>
					<a sveltekit:prefetch href={siteLink.path}>{siteLink.label}</a>
				</li>
			{/each}
		</ul>
		<div>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M 0,0 C 0,1.8734187 0.42926958,3 2,3 V 0 Z" />
			</svg>
			<ul id="fullNav">
				{#each siteLinks as siteLink}
					<li class:active={$page.url.pathname === siteLink.path}>
						<a sveltekit:prefetch href={siteLink.path}>{siteLink.label}</a>
					</li>
				{/each}
				<li id="hamburger" on:click={() => (showMobileNav = !showMobileNav)}>
					<Icon data={bars} scale={2} />
				</li>
			</ul>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M 2,0 C 2,1.8734187 1.5707304,3 0,3 V 0 Z" />
			</svg>
		</div>
	</nav>

	<div class="corner">
		<a href="https://www.instagram.com/thedoodlestellall/"><Icon data={instagram} scale={3} /></a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0;
		z-index: 999;
	}

	.corner {
		display: none;
		width: 3em;
		height: 3em;
		margin: 1em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	nav {
		position: absolute;
		z-index: 999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100vw;
		--background: rgba(255, 255, 255, 0.7);
	}

	nav div {
		display: flex;
		left: 50%;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	#mobileNav li.active {
		border-bottom: 3px solid var(--accent-color);
	}

	#mobileNav li {
		padding: 1rem;
		width: 50%;
		display: flex;
		justify-content: center;
	}

	#mobileNav {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: auto;
		transition: margin-top 500ms ease-in-out;
		background: var(--pure-white);
	}

	#fullNav li {
		position: relative;
		height: 100%;
	}

	#fullNav li:not(#hamburger) {
		display: none;
	}

	#fullNav li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	#hamburger {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 480px) {
		header {
			justify-content: space-between;
		}

		#mobileNav {
			display: none;
		}

		#fullNav li:not(#hamburger) {
			display: inherit;
		}

		#hamburger {
			display: none;
		}

		.corner {
			display: inherit;
		}
	}
</style>
