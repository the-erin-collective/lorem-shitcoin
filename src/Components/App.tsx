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
  const [coinText, setCoinText] = useState('');
  const [pitchText, setPitchText] = useState('');
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Banner name="banner" text="lorem-shitcoin" />
        <ForkMe codeUrl='https://github.com/the-erin-collective/lorem-shitcoin'/>
        <InputBox id='coin' text={coinText} readonly={false} title='coin name' isMultiline={false} onClick={() => {
            setCoinLocked(!coinLocked);
          }} 
          onChange={(e) => {
            let el = (e.target as HTMLInputElement);
            setCoinText(el.value);
          }}
          locked={coinLocked} />
        <InputBox id='pitch' text={pitchText} readonly={true} title='sales pitch' isMultiline={true} onClick={() => {
            setPitchLocked(!pitchLocked);
          }} 
          onChange={(e) => {
            let el = (e.target as HTMLInputElement);
            setCoinText(el.value);
          }}
          locked={pitchLocked}  />
        <Button onClick={() => {
            setCoinText('MOONZOOM');
            setPitchText('when lambo?');
            console.log('clicked');
          }} text="get rich quick!" />
        <div className={classes.pageDescription}>
          generate random crypto sales pitches using the button above, you can "lock" a text box (eg coin name) to stop it from randomizng.
        </div>
      </header>
    </div>
  );
}

export default App;
