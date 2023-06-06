// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NextInspect Testing Tool</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Request Number 1
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <p id = 'testing'> Testing</p>
      {/* <p id="url"> url : </p>
      <p id="method"> method : </p>
      <p id="httpVersion"> httpVersion : </p>
      <p id="status"> status : </p>
      <p id="size"> size : </p>
      <p id="resourceType"> resourceType : </p>
      <p id="time"> time : </p> */}
    </>
  )
}

export default App
