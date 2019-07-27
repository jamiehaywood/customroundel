import React, { useState } from 'react';
import './App.css';
import Roundel from './Roundel';
import InputBox from './InputBox';
import ColorBox from './ColorBox'

const App: React.FC = () => {
  const [input, setInput] = useState("");

  const [roundelColour, setRoundelColour] = useState("#E76810")

  const colorsArray =
    [
      "#E11B1E",
      "#EC7C1B",
      "#F8BA16",
      "#773DBC",
      "#A8388A",
      "#7E8ABE",
      "#1999D3",
      "#16A4A7",
      "#83B821",
    ]

  const colourBox = colorsArray.map(x => <ColorBox colour={x} setRoundelColour={setRoundelColour} />)

  return (
    <div>
      <div className="roundelStyling">
        <Roundel text={input} roundelColour={roundelColour} />
      </div>

      <div className="textBoxStyling">
        <InputBox input={input} setInput={setInput} />
      </div>

      <div className="colourBoxStyling">
        {colourBox}
      </div>

    </div>
  );
}

export default App;
