import logo from './logo.svg';
import './App.module.scss';
import Button from '../Components/Button/Button';
import InputBox from '../Components/InputBox/InputBox';
import React, { useState } from 'react';

function App() {
  const [coinLocked, setCoinLocked] = useState(false);
  const [pitchLocked, setpitchLocked] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <InputBox id='coin' readonly={false} title='coin name' onClick={(currentLocked) => {
            setCoinLocked(!coinLocked);
          }} 
          locked={coinLocked} />
        <InputBox id='pitch' readonly={true} title='sales pitch' onClick={(currentLocked) => {
            setpitchLocked(!pitchLocked);
          }} 
          locked={pitchLocked}  />
        <Button onClick={() => {console.log('clicked');}} text="randomize" />
        <a className="App-link"
          href="https://github.com/the-erin-collective/lorem-shitcoin"
          target="_blank"
          rel="noopener noreferrer" >
          get the code (AGPL3 licenced)
        </a>
      </header>
    </div>
  );
}

export default App;
