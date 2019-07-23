import React, { useState } from 'react';
import './App.css';
import Roundel from './Roundel';
import InputBox from './InputBox';



const App: React.FC = () => {
  const [input, setInput] = useState("");
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
