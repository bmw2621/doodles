import type { Puppies } from '$lib/types/puppies';

export const puppies: Puppies = {
	'Litter 1': {
		puppies: [
			{
				name: 'Black',
				adopted: false,
				key: 'black',
				imgUrl: '/dogs/black/1.webp',
				isMale: true,
				imgCount: 4
			},
			{
				name: 'Brownie',
				adopted: true,
				key: 'brownie',
				imgUrl: '/dogs/brownie/2.webp',
				isMale: false,
				imgCount: 4
			},
			{
				name: 'Green',
				adopted: false,
				key: 'green',
				imgUrl: '/dogs/green/2.webp',
				isMale: true,
				imgCount: 4
			},
			{
				name: 'Grey',
				adopted: false,
				key: 'grey',
				imgUrl: '/dogs/grey/2.webp',
				isMale: true,
				imgCount: 2
			},
			{
				name: 'Lavender',
				adopted: false,
				key: 'lavender',
				imgUrl: '/dogs/lavender/2.webp',
				isMale: false,
				imgCount: 4
			},
			{
				name: 'Light Blue',
				adopted: false,
				key: 'lightBlue',
				imgUrl: '/dogs/lightBlue/2.webp',
				isMale: true,
				imgCount: 4
			},
			{
				name: 'Pink',
				adopted: true,
				key: 'pink',
				imgUrl: '/dogs/pink/2.webp',
				isMale: false,
				imgCount: 4
			},
			{
				name: 'Royal Blue',
				adopted: false,
				key: 'royalBlue',
				imgUrl: '/dogs/royalBlue/2.webp',
				isMale: true,
				imgCount: 4
			}
		],
		breed: 'F2B Goldendoodles'
	}
};

export const INSTAGRAM_LINK = 'https://www.instagram.com/thedoodlestellall/';
