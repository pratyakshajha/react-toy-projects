import { useEffect, useMemo, useState } from 'react'
import './App.css'

const MAX_COUNT = 200;
const MIN_COUNT = 0;

function App() {
  const [count, setCount] = useState(0);
  const [isAutoCount, setIsAutoCount] = useState(false);
  const sheepArray = useMemo(() => Array.from({ length: count }), [count]);
  const bgShades = ['bg-gray-800/70', 'bg-gray-800/20', 'bg-gray-900', 'bg-black/10', 'bg-black/50', 'bg-black/80', 'bg-black'];

  useEffect(() => {
    if (!isAutoCount) return;

    const interval = setInterval(() => {
      // don't use count+1 because it uses older value which was captured from render which created the effect that happended at count=0
      // functional update guarantees that latest state value is injected by react
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isAutoCount])

  // stop autocount on reaching max count
  useEffect(() => {
    if (count === MAX_COUNT) {
      setIsAutoCount(false);
    }
  }, [count]);

  return (
    <>
      <div
        className={`relative flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-colors duration-500 ${bgShades[Math.min(count, bgShades.length - 1)]}`}>

        <h1 className="text-4xl mb-8 font-bold">Sleepy Sheep Counter</h1>
        <div key={count} className="min-h-16 flex items-center justify-center flex-wrap max-w-full px-75 sm:px-25">
          {sheepArray.map((_, index) => (
            <span key={index} className={index === count - 1 ? "animate-pop text-4xl m-1" : "text-4xl m-1"}> 🐑 </span>
          ))}
        </div>

        <div className='mt-10 flex items-center'>
          <button className='m-3 p-3 px-5 rounded-xl text-gray-100 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-30'
            onClick={() => setCount(prev => prev - 1)} disabled={isAutoCount || count === MIN_COUNT}>➖ 🐑</button>

          <div className={`m-3 p-3 px-10 rounded-xl text-gray-100 bg-gray-700 ${count === MAX_COUNT ? 'bg-red-600 shadow-lg scale-105' : ''}`} >{count}</div>

          <button className='m-3 p-3 px-5 rounded-xl text-gray-100 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-30'
            onClick={() => setCount(prev => prev + 1)} disabled={isAutoCount || count === MAX_COUNT}>➕ 🐑</button>
        </div>

        <div>
          <button className='m-3 p-3 px-5 rounded-xl text-gray-100 bg-gray-700 hover:bg-gray-600'
            onClick={() => { setCount(0); setIsAutoCount(false); }}>Reset Count</button>
          <button className='m-3 p-3 px-5 rounded-xl text-gray-100 bg-gray-700 hover:bg-gray-600'
            onClick={() => setIsAutoCount(prev => !prev)} disabled={count === MAX_COUNT}>{isAutoCount ? "Stop Auto Count" : "Auto Count Sheep"}</button>
        </div>

        {/* Moon */}
        <div className="absolute top-5 right-10 text-6xl">🌙</div>
        {/* Stars */}
        <div className="absolute top-5 left-10 text-yellow-300 text-sm animate-pulse">✨</div>
        <div className="absolute top-10 right-20 text-yellow-300 text-xs animate-pulse">⭐</div>
        <div className="absolute top-1/4 left-1/3 text-yellow-300 text-xs animate-pulse">✦</div>
        <div className="absolute top-1/6 right-3/4 text-yellow-300 text-xs animate-pulse">⭐</div>
        <div className="absolute bottom-10 left-1/5 text-yellow-300 text-sm animate-pulse">✨</div>
        <div className="absolute bottom-20 right-1/3 text-yellow-300 text-xs animate-pulse">✦</div>
        <div className="absolute top-3/4 left-3/4 text-yellow-300 text-xs animate-pulse">⭐</div>
        <div className="absolute top-1/3 right-1/5 text-yellow-300 text-sm animate-pulse">✨</div>
        <div className="absolute bottom-1/4 left-2/3 text-yellow-300 text-xs animate-pulse">✦</div>
        <div className="absolute bottom-1/5 right-7/8 text-yellow-300 text-sm animate-pulse">⭐</div>
      </div>
    </>
  )
}

export default App
