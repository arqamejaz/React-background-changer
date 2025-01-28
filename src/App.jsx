
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-20" style={{ background: color }}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl gap-3">
        <button onClick={() => setColor("red")} className="shadow-xl bg-red-500 rounded-full text-white px-3 py-1">Red</button>
        <button onClick={() => setColor("green")} className="shadow-xl bg-green-500 rounded-full text-white px-3 py-1">Green</button>
        <button onClick={() => setColor("blue")} className="shadow-xl bg-blue-500 rounded-full text-white px-3 py-1">Blue</button>
        <button onClick={() => setColor("olive")} className="shadow-xl bg-[olive] rounded-full text-white px-3 py-1">Olive</button>
        <button onClick={() => setColor("gray")} className="shadow-xl bg-gray-500 rounded-full text-white px-3 py-1">Gray</button>
        <button onClick={() => setColor("yellow")} className="shadow-xl bg-yellow-500 rounded-full text-white px-3 py-1">Yellow</button>
        <button onClick={() => setColor("pink")} className="shadow-xl bg-pink-500 rounded-full text-white px-3 py-1">Pink</button>
        <button onClick={() => setColor("purple")} className="shadow-xl bg-purple-500 rounded-full text-white px-3 py-1">Purple</button>
        <button onClick={() => setColor("lavender")} className="shadow-xl bg-[lavender] rounded-full text-black px-3 py-1">Lavender</button>
        <button onClick={() => setColor("white")} className="shadow-xl bg-[white] rounded-full text-black px-3 py-1">White</button>
        <button onClick={() => setColor("black")} className="shadow-xl bg-[black] rounded-full text-white px-3 py-1">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
