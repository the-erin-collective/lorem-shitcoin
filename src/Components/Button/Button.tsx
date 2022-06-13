import React, { MouseEventHandler } from 'react'
import classes from '../Button/Button.module.scss'

type Props = {
  onClick: MouseEventHandler,
  text: string,
}

const Button = ({ onClick, text }: Props) => (
  <button onClick={onClick} className={classes.style}>
    {text}
  </button>
)

export default Button