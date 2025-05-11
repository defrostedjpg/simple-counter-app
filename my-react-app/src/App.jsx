import { useState } from 'react'
import './App.css'

function App() {
  function MyButton() {
    return (
      <button>as</button>
    )
  }
  
  return (
    <>
      <div>
        <button className="bg-red-500 text-neutral-100">Notss</button>
        <MyButton />
      </div>
    </>
  );
}

export default App
