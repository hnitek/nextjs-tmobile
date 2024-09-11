import { HnTopStory } from "./hn-types";

const hnApi = process.env.NEXT_PUBLIC_HN_API;

export const hnTopStories = async (): Promise<number[]> => {
	const response = await fetch(`${hnApi}/topstories.json`, {
		next: {
			revalidate: 120,
		},
	});
	return response.json();
};

export const hnStory = async (id: number) => {
	const response = await fetch(`${hnApi}/item/${id}.json`, {
		next: {
			revalidate: 120,
		},
	});
	return response.json();
};

export const hnStories = async (ids: number[]): Promise<HnTopStory[]> => {
	const stories = await Promise.all(
		ids.map(async (id) => {
			return await hnStory(id);
		})
	);
	return stories;
};
