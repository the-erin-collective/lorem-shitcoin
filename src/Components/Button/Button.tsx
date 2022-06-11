import React, { MouseEventHandler } from 'react'
import { buttonStyles } from '../Button/Button.module.css'

type Props = {
  onClick: MouseEventHandler,
  text: string,
}

const Button = ({ onClick, text }: Props) => (
  <button onClick={onClick} className={buttonStyles.style}>
    {text}
  </button>
)

export default Button