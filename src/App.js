//import components here
import react, { useState } from 'react';
import mySvg from './mySvg.svg'

function App() {
  //Add JavaScript here
  
  const [text, setText] = useState("Enter Text");

  return (
    <div className="App" style={{ backgroundImage: `url(${mySvg})` }} class="min-h-screen bg-cover">
      <link href="/dist/output.css" rel="stylesheet" />

      <div class="flex justify-evenly items-center flex-col space-y sm bg-slate-400 rounded-3xl h-screen bg-opacity-70">

        <h1 class="text-6xl font-bold break-all text-center">{text}</h1>
        
        <input onChange={e => setText(e.target.value)} class="border-2 outline-none rounded-3xl text-center w-4/12 text-3xl"></input>
      
      </div>
      
    </div>
  );
}

export default App;