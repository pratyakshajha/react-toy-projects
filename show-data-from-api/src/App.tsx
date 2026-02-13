import { useState, useEffect } from 'react'
import { getJokes } from './services/jokeService';
import type { Joke } from './models/joke';
import './App.css';
import JokeList from './components/Jokelist';

function App() {
  const [data, setData] = useState<Joke[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadJokes = async () => {
    try {
      const data = await getJokes();
      setData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error!');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {    
    loadJokes();
  }, [])

  return (
    <>
      <button
        onClick={() => loadJokes()}
        className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 m-5 rounded-xl hover:bg-blue-600 transition"
      >Reload</button>
      <h1 className="text-2xl font-extrabold text-center text-gray-200 mb-15">
        Flip for a Punchline!
      </h1>
      <JokeList jokes={data} />
    </>
  )
}

export default App
