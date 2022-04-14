<script lang="ts">
	import type { Puppy } from './types/puppies';

	export let puppy: Puppy;

	let currentImage = 1;
</script>

<div class="modalContainer">
	<h1>{puppy.name}</h1>
	<picture style:margin-bottom="20px">
		<source srcset={`/dogs/${puppy.name}/${currentImage}.webp`} type="image/webp" />
		<img src={`/dogs/${puppy.name}/${currentImage}.png`} alt={puppy.name} />
	</picture>
	<div class="modalOptions">
		{#each Array.from(Array(puppy.imgCount).keys()) as imgSrc}
			<img
				on:click={() => (currentImage = imgSrc + 1)}
				class={`thumb ${currentImage === imgSrc + 1 ? 'selected' : ''}`}
				src={`/dogs/${puppy.name}/${imgSrc + 1}.webp`}
				alt=""
			/>
		{/each}
	</div>
</div>

<style>
	.modalContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	.modalOptions {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
	}

	.thumb {
		height: 50px;
	}

	.selected {
		border: 5px solid var(--accent-color);
	}
</style>
