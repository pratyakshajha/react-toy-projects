import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isAutoCount, setIsAutoCount] = useState(false);

  useEffect(() => {
    if (!isAutoCount) return;

    const interval = setInterval(() => {
      // don't use count+1 because it uses older value which was captured from render which created the effect happended at count=0
      // functional update guarantees that latest state value is injected by react
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isAutoCount])


  return (
    <>
      <div>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>🐑 Counting Sheeps {count} times!</h1>
      </div>
      <div className='m-10'>
        <button className='m-3 p-3 px-5 rounded-xl text-gray-100 bg-gray-700'
          onClick={() => setCount(count + 1)}>Count Sheep</button>
        <button className='m-3 p-3 px-5 rounded-xl text-gray-100 bg-gray-700'
          onClick={() => setCount(0)}>Reset Count</button>
        <button className='m-3 p-3 px-5 rounded-xl text-gray-100 bg-gray-700'
          onClick={() => setIsAutoCount(prev => !prev)}>{isAutoCount ? "Stop Auto Count" : "Auto Count Sheep"}</button>
      </div>
    </>
  )
}

export default App
