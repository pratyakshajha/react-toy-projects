export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

export interface ApiResponse<T> {
    data: T | null;
    status: number;
    error: string | null;
}