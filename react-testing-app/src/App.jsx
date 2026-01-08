import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import FetchUsers from './components/FetchUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Counter/>
       <FetchUsers/>
    </>
  )
}

export default App
