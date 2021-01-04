import React, { useState } from "react";
import "./App.css";
import Roundel from "./Roundel";
import InputBox from "./InputBox";
import ColorBox from "./ColorBox";
import coloursArray from "./colours-array.json";

const App: React.FC = () => {
  const [input, setInput] = useState("");

  const [roundelColour, setRoundelColour] = useState("#E76810");

  const colourBox = coloursArray.map((x) => (
    <ColorBox colour={x} setRoundelColour={setRoundelColour} />
  ));

  return (
    <div>
      <div className="roundelStyling">
        <Roundel text={input} roundelColour={roundelColour} />
      </div>

      <div className="textBoxStyling">
        <InputBox input={input} setInput={setInput} />
      </div>

      <div className="colourBoxStyling">{colourBox}</div>
    </div>
  );
};

export default App;
