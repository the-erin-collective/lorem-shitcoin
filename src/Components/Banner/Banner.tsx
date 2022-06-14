import React, { MouseEventHandler } from 'react'
import classes from '../Banner/Banner.module.scss'

type Props = {
  text: string,
  name: string
}

const Banner = ({text, name = "banner"}: Props) => (
<div className={classes.animTextFlow}>
  <div className={classes.text}>
  {text.split('').map((letter, i) => (  
          <span key={i}>  
            {letter}  
          </span>  
        ))}
  </div>
</div>
)

export default Banner