import logo from './logo.svg';
import './App.module.scss';
import Button from '../Components/Button/Button';
import InputBox from '../Components/InputBox/InputBox';
import ForkMe from '../Components/ForkMe/ForkMe';
import React, { useState } from 'react';

function App() {
  const [coinLocked, setCoinLocked] = useState(false);
  const [pitchLocked, setPitchLocked] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <ForkMe codeUrl='https://github.com/the-erin-collective/lorem-shitcoin'/>
        <InputBox id='coin' readonly={false} title='coin name' isMultiline={true} onClick={(currentLocked) => {
            setCoinLocked(!coinLocked);
          }} 
          locked={coinLocked} />
        <InputBox id='pitch' readonly={false} title='sales pitch'  isMultiline={false} onClick={(currentLocked) => {
            setPitchLocked(!pitchLocked);
          }} 
          locked={pitchLocked}  />
        <Button onClick={() => {console.log('clicked');}} text="randomize" />
      </header>
    </div>
  );
}

export default App;
