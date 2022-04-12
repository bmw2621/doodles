interface Puppy {
	name: string;
	adopted: boolean;
	isMale: boolean;
	imgUrl: string;
	key: string;
}

export default interface Puppies {
	[key: string]: {
		puppies: Puppy[];
		breed: string;
	};
}
