import { useState } from 'react';
import type { Joke } from '../models/joke';
import confetti from "canvas-confetti";

interface Props {
    joke: Joke;
}

export default function JokeCard({ joke }: Props) {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);

        if (!flipped) {
            confetti({
                particleCount: 70,
                spread: 90,
                origin: { y: 0.6 },
                colors: ["#FF5757", "#FFD700", "#4ADE80", "#60A5FA", "#D946EF"]
            });
        }
    };

    return (
        <div className="inline-block break-inside-avoid mb-8 w-full perspective cursor-pointer" onClick={handleFlip}>
            <div
                className={`relative w-full transition-transform duration-700 transform grid ${flipped ? "rotate-y-180" : ""}`}
                style={{ transformStyle: "preserve-3d" }}>

                <div className="row-start-1 col-start-1 w-full bg-gray-300 shadow-md rounded-xl p-8 backface-hidden flex items-center justify-center">
                <h3 className="text-gray-800 text-xl font-semibold text-center">{joke.setup}</h3>
                </div>

                <div className="row-start-1 col-start-1 w-full bg-gray-400 shadow-md rounded-xl p-8 backface-hidden rotate-y-180 flex items-center justify-center">
                <p className="text-gray-900 text-xl font-semibold text-center">{joke.punchline}</p>
                
                </div>
            </div>
        </div>
    );
}