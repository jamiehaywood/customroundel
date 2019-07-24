import React from 'react'
import './ColorBox.scss'

interface Props{
    setRoundelColour:Function,
    colour:string,
}

const ColorBox: React.FC<Props> = (props) => {
    const colour = props.colour
    const divStyle = {
        width: 30,
        height: 30,
        background: colour,
        borderStyle:"solid",
        borderWidth: 2,
        borderColor: "#22292F",
        borderRadius: 5,
        display: "flex",
        cursor: "pointer"
    }
    return (
        <button style={divStyle} onClick={() => props.setRoundelColour(colour)}></button>
    )
}

export default ColorBox