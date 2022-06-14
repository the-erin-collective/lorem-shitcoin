import logo from './logo.svg';
import classes from './App.module.scss';
import Button from '../Components/Button/Button';
import InputBox from '../Components/InputBox/InputBox';
import ForkMe from '../Components/ForkMe/ForkMe';
import Banner from '../Components/Banner/Banner';
import React, { useState } from 'react';

function App() {
  const [coinLocked, setCoinLocked] = useState(false);
  const [pitchLocked, setPitchLocked] = useState(false);
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Banner name="banner" text="lorem-shitcoin" />
        <ForkMe codeUrl='https://github.com/the-erin-collective/lorem-shitcoin'/>
        <InputBox id='coin' readonly={false} title='coin name' isMultiline={false} onClick={() => {
            setCoinLocked(!coinLocked);
          }} 
          locked={coinLocked} />
        <InputBox id='pitch' readonly={true} title='sales pitch' isMultiline={true} onClick={() => {
            setPitchLocked(!pitchLocked);
          }} 
          locked={pitchLocked}  />
        <Button onClick={() => {console.log('clicked');}} text="get rich quick!" />
        <div className={classes.pageDescription}>
          generate random crypto sales pitches using the button above, you can "lock" a text box (eg coin name) to stop it from randomizng.
        </div>
      </header>
    </div>
  );
}

export default App;
