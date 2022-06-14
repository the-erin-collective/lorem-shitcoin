import React, { MouseEventHandler } from 'react'
import classes from '../InputBox/InputBox.module.scss'
import lockedImage from '../InputBox/locked.png'
import unlockedImage from '../InputBox/unlocked.png'

type Props = {
  onClick: () => void,
  locked: boolean,
  id: string,
  title: string,
  readonly: boolean,
  isMultiline: boolean,
  text: string,
  onChange: (e:React.SyntheticEvent) => void
}

const InputBox = ({ id, title, text = '', readonly, onClick, onChange, locked, isMultiline }: Props) => (
  <div className={classes.inputBox}>
    {isMultiline && <div className={classes.textboxContainer}>
      <div className={classes.textBoxBorder}></div>
      <textarea
      onChange={(e) => {
        if(!e.currentTarget.readOnly){
          onChange(e);
        }
        if(!e.currentTarget.value || e.currentTarget.value.length == 0){
          e.currentTarget.parentElement.getElementsByTagName('label')[0].classList.remove(`${classes.active}`);
        }else{
          e.currentTarget.parentElement.getElementsByTagName('label')[0].classList.add(`${classes.active}`);
        }
      }}
      onFocus={(e) => {
        if(!e.target.readOnly && (!e.target.value || e.target.value.length == 0)){
          e.target.parentElement.getElementsByTagName('label')[0].classList.add(`${classes.active}`);
          e.target.parentElement.getElementsByTagName('div')[0].classList.add(`${classes.textareaActive}`);
        }
        }} 
      onBlur={(e) => {
        if(!e.target.readOnly && (!e.target.value || e.target.value.length == 0)){
          e.target.parentElement.getElementsByTagName('label')[0].classList.remove(`${classes.active}`);
          e.target.parentElement.getElementsByTagName('div')[0].classList.remove(`${classes.textareaActive}`);
        }
        }} 
      id={id} 
      name={id}
      rows={8} 
      className={classes.containerMulti} 
      readOnly={readonly}
      value={text}
      />
      <label htmlFor={id} className={`${(readonly || text.length > 0) ? classes.active : ""}`}>{title}</label>      
      </div>
    }

    {!isMultiline && <div className={classes.textboxContainer}>
      <div className={classes.inputBoxBorder}></div>
      <input type="text"
      onChange={(e) => {
        if(!e.currentTarget.readOnly){
          onChange(e);
        }
        if(!e.currentTarget.value || e.currentTarget.value.length == 0){
          e.currentTarget.parentElement.getElementsByTagName('label')[0].classList.remove(`${classes.active}`);
        }else{
          e.currentTarget.parentElement.getElementsByTagName('label')[0].classList.add(`${classes.active}`);
        }
      }}
      onFocus={(e) => {
        if(!e.target.readOnly && (!e.target.value || e.target.value.length == 0)){
          e.target.parentElement.getElementsByTagName('label')[0].classList.add(`${classes.active}`);
          e.target.parentElement.getElementsByTagName('div')[0].classList.add(`${classes.textBoxActive}`);
        }
        }} 
      onBlur={(e) => {
        if(!e.target.readOnly && (!e.target.value || e.target.value.length == 0)){
          e.target.parentElement.getElementsByTagName('label')[0].classList.remove(`${classes.active}`);
          e.target.parentElement.getElementsByTagName('div')[0].classList.remove(`${classes.textBoxActive}`);
        }
        }} 
      id={id} 
      name={id} 
      className={classes.containerSingle} 
      readOnly={readonly}
      value={text}
      />   
      <label htmlFor={id} className={`${(readonly || text.length > 0) ? classes.active : ""}`}>{title}</label>      
      </div>
    }
    <div className={classes.buttonContainer}>
      <button onClick={ () => { onClick();}} className={`${classes.button} ${locked ? classes.locked : ""}`}>
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