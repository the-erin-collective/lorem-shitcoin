import React, { MouseEventHandler } from 'react'
import classes from '../InputBox/InputBox.module.scss'
import lockedImage from '../InputBox/locked.png'
import unlockedImage from '../InputBox/unlocked.png'

type Props = {
  onClick: (lock: boolean) => void,
  locked: boolean,
  id: string,
  title: string,
  readonly: boolean
}

const InputBox = ({ id, title, readonly, onClick, locked }: Props) => (
  <div>
    <div className={classes.textboxContainer}>
      <div className={classes.textBoxBorder}></div>
      <input onChange={(e) => {
          if(e.target.value.length == 0){
            e.target.parentElement.getElementsByTagName('label')[0].classList.remove(`${classes.active}`);
          }else{
            e.target.parentElement.getElementsByTagName('label')[0].classList.add(`${classes.active}`);
          }
        }}
        onFocus={(e) => {
          if(!e.target.readOnly && e.target.value.length == 0){
            e.target.parentElement.getElementsByTagName('label')[0].classList.add(`${classes.active}`);
            e.target.parentElement.getElementsByTagName('div')[0].classList.add(`${classes.textBoxActive}`);
          }
          console.log('local', e); console.log(e.target.readOnly);
          }} 
        onBlur={(e) => {
          if(!e.target.readOnly && e.target.value.length == 0){
            e.target.parentElement.getElementsByTagName('label')[0].classList.remove(`${classes.active}`);
            e.target.parentElement.getElementsByTagName('div')[0].classList.remove(`${classes.textBoxActive}`);
          }
          console.log('local', e); console.log(e.target.readOnly);
          }} 
        id={id} 
        type="text"
        name={id} 
        className={classes.cool} 
        readOnly={readonly}
        />
      <label htmlFor={id} className={`${readonly ? classes.active : ""}`}>{title}</label>      
    </div>
    <div className={classes.buttonContainer}>
      <button onClick={ () => { onClick(locked);}} className={`${classes.button} ${locked ? classes.locked : ""}`}>
        {locked === true &&
          <img src={lockedImage} alt="locked" />
        }
        {locked === false &&
          <img src={unlockedImage} alt="unlocked" />
        }
      </button>
    </div>
  </div>
)

export default InputBox