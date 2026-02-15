import type { Joke } from '../models/joke';

const BASE_URL = 'https://official-joke-api.appspot.com';

export const fetchJokes = async (): Promise<Joke[]> => {
    const response = await fetch(`${BASE_URL}/jokes/random/9`);
    if (!response.ok) {
        throw new Error('Failed to fetch jokes');
    }
    return response.json();
};