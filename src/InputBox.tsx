import React from 'react';
import "./InputBox.scss";

interface Input {
    setInput: Function,
    input: string,
}

const InputBox: React.FC<Input> = props => {
    return (
        <input type="text" maxLength={25} className="textBox" placeholder="Your text here" value={props.input} onChange={e => props.setInput(e.target.value)}>
        </input>
    );
}

export default InputBox;