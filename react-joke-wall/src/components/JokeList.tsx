import type { Joke } from '../models/joke';
import JokeCard from './JokeCard';

interface Props {
    jokes: Joke[];
}

export default function JokeList({ jokes }: Props) {
    return (
        <div className='columns-1 sm:columns-2 md:columns-3 gap-8 p-5'>
            {jokes.map(joke => (
                <JokeCard key={joke.id} joke={joke} />
            ))}
        </div>
    );
}
