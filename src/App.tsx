import React, { useState } from 'react';
import './App.css';
import Roundel from './Roundel';
import InputBox from './InputBox';



const App: React.FC = () => {
  const [input, setInput] = useState("");
  const colorsArray = [
    "#773DBC", "#F8BA16", "#A8388A", "#16A4A7", "#EC7C1B", "#1999D3", "#7E8ABE", "#83B821", "#E11B1E"
  ]
  const colourBox = colorsArray.map(x => <ColorBox colour={x} setRoundelColour={setRoundelColour} />)

  return (
    <div>
      <div className="roundel">
        <Roundel text={input}/>
      </div>
      <div>
        <InputBox input={input} setInput={setInput}/>
      </div>
    </div>
  );
}

export default App;
