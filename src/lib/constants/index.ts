import type Puppies from '$lib/types/puppies';

export const puppies: Puppies = {
	'Litter 1': {
		puppies: [
			{ name: 'Black', adopted: false, key: 'black', imgUrl: '/dogs/black/1.webp', isMale: true },
			{
				name: 'Brownie',
				adopted: true,
				key: 'brownie',
				imgUrl: '/dogs/brownie/2.webp',
				isMale: false
			},
			{ name: 'Green', adopted: false, key: 'green', imgUrl: '/dogs/green/2.webp', isMale: true },
			{ name: 'Grey', adopted: false, key: 'grey', imgUrl: '/dogs/grey/2.webp', isMale: true },
			{
				name: 'Lavender',
				adopted: false,
				key: 'lavender',
				imgUrl: '/dogs/lavender/2.webp',
				isMale: false
			},
			{
				name: 'Light Blue',
				adopted: false,
				key: 'lightBlue',
				imgUrl: '/dogs/lightBlue/2.webp',
				isMale: true
			},
			{ name: 'Pink', adopted: false, key: 'pink', imgUrl: '/dogs/pink/2.webp', isMale: false },
			{
				name: 'Royal Blue',
				adopted: false,
				key: 'royalBlue',
				imgUrl: '/dogs/royalBlue/2.webp',
				isMale: true
			}
		],
		breed: 'F2B Goldendoodles'
	}
};
