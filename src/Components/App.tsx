import logo from './logo.svg';
import './App.module.scss';
import Button from '../Components/Button/Button';
import InputBox from '../Components/InputBox/InputBox';
import React from 'react';

// let focusHandler = (e:React.FocusEvent) => {
//   console.log(e);
//   if(e.target.reado){
//     var parent = e.target.parentElement.getElementsByTagName('label')[0].classList.add(`${classes.active}`);
//   }
// };
// let blurHandler = (e:React.FocusEvent) => {
//   console.log(e);
//   if(e.target.readonly){
//     var parent = e.target.parentElement.getElementsByTagName('label')[0].classList.remove(`${classes.active}`);
//   }
// };

function App() {
 // let coinLocked: boolean = useSt8(false);
  return (
    <div className="App">
      <header className="App-header">
        <InputBox id='coin' readonly={false} title='coin name' onClick={(currentLocked) => {
            console.log(currentLocked);
          //  locked = currentLocked;
          }} 
          locked={false} />
        <InputBox id='pitch' readonly={true} title='sales pitch' onClick={(currentLocked) => {
            console.log(currentLocked);
        //    this.locked = !currentLocked;
          }} 
          locked={false}  />
        <Button onClick={() => {console.log('clicked');}} text="randomize" />
        <a
          className="App-link"
          href="https://github.com/the-erin-collective/lorem-shitcoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          get the code (AGPL3 licenced)
        </a>
      </header>
    </div>
  );
}

export default App;
