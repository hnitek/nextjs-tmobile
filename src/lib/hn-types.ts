export interface HnTopStory {
	id: number;
	by: string;
	descendants: number;
	score: number;
	time: number;
	title: string;
	type: string;
	url: string;
	kids: number[];
}
