import logo from './logo.svg';
import './App.scss';
import Button from './Components/Button/Button';
import InputBox from './Components/InputBox/InputBox';


function App() {
 // let coinLocked: boolean = useSt8(false);

  return (
    <div className="App">
      <header className="App-header">
        <InputBox readonly={false} title='coin name' onClick={(currentLocked) => {
            console.log(currentLocked);
          //  locked = currentLocked;
          }} 
          locked={false} />
        <InputBox readonly={true} title='sales pitch' onClick={(currentLocked) => {
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
