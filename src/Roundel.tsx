import React from 'react';
import './App.css'

interface Input {
    text: string,
    roundelColour: string
}

const Roundel: React.FC<Input> = (props) => {
    let text = props.text.toLocaleUpperCase();
    let fontSize = 7.882566 + (81.4836881 - 7.882566) / (1 + Math.pow((text.length / 17.16642), 2.26065))
    let roundelColour = props.roundelColour

    return (
        <svg
            viewBox="0 0 500 400"
            id="svg2158">
            <g
                transform="translate(-125,-332.36247)"
                preserveAspectRatio="none"
                id="layer1">
                <path
                    d="M 537.93975,532.36219 C 537.95763,623.71357 464.09131,697.77801 372.96638,697.77801 C 281.84146,697.77801 207.97514,623.71357 207.99303,532.36219 C 207.97514,441.0108 281.84146,366.94636 372.96638,366.94636 C 464.09131,366.94636 537.95763,441.0108 537.93975,532.36219 L 537.93975,532.36219 z"
                    fill="none"
                    stroke={roundelColour}
                    strokeWidth="69.16777039"
                    stroke-opacity="1"
                    id="circle"
                />
                <path
                    d="M 125,492.3786 L 625,492.3786 L 625,570.39822 L 125,570.39822 L 125,492.3786 z"
                    fill="#0019a8"
                    fill-opacity="1"
                    id="line"
                />
            </g>
            <text x="50%" y="199px" fill="white" fontSize={fontSize} fontFamily="Johnston100-Medium" alignmentBaseline='central' textAnchor="middle">{text}</text>
        </svg>
    );
}

export default Roundel;