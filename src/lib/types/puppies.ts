export interface Puppy {
	name: string;
	adopted: boolean;
	isMale: boolean;
	imgUrl: string;
	key: string;
	imgCount: number;
}

export interface Puppies {
	[key: string]: {
		puppies: Puppy[];
		breed: string;
	};
}
