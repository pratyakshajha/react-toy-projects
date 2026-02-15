import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      </div>
    </>
  )
}

export default App
