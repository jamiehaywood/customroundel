import React from 'react'
import './ColorBox.scss'

interface Props {
    setRoundelColour: Function,
    colour: string,
}

const ColorBox: React.FC<Props> = (props) => {
    const colour = props.colour

    const divStyle = {
        width: 40,
        height: 40,
        background: colour,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 5,
        padding: 5,
        cursor: "pointer"
    }

    return (
        <div className="box">
            <button style={divStyle} onClick={() => props.setRoundelColour(colour)}></button>
        </div>
    )
}

export default ColorBox