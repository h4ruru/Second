import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Preview from './components/Preview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Preview />
    </>
  )
}

export default App
