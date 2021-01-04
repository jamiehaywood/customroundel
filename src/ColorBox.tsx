import React from "react";
import "./ColorBox.scss";

interface Props {
  setRoundelColour: (colour: string) => void;
  colour: string;
}

const ColorBox: React.FC<Props> = ({ colour, setRoundelColour }) => {
  const divStyle = {
    width: 40,
    height: 40,
    background: colour,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 5,
    padding: 5,
    cursor: "pointer",
  };

  return (
    <div className="box">
      <button
        style={divStyle}
        onClick={() => setRoundelColour(colour)}
      ></button>
    </div>
  );
};

export default ColorBox;
