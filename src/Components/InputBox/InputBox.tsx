import React, { MouseEventHandler } from 'react'
import classes from '../InputBox/InputBox.module.scss'
import lockedImage from '../InputBox/locked.png'
import unlockedImage from '../InputBox/unlocked.png'

type Props = {
  onClick: (lock: boolean) => void,
  locked: boolean,
  title: string,
  readonly: boolean
}

const InputBox = ({ title, readonly, onClick, locked }: Props) => (
  <div>
    <div className={classes.textboxContainer}>
      <label htmlFor="cname" className={`${readonly ? classes.active : ""}`}>{title}</label>
      <input onFocus={(e) => {
          var parent = e.target.parentElement.getElementsByTagName('label')[0].classList.add(`${classes.active}`);
        }} 
        onBlur={(e) => {
          console.log(e);
          var parent = e.target.parentElement.getElementsByTagName('label')[0].classList.remove(`${classes.active}`);
        }} 
        id="cname" 
        type="text"
        className={classes.cool} 
        readOnly={readonly}
        />
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