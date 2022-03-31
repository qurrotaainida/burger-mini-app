import React from 'react'

import style from './burger.module.css'

const Bun = (props) => {

  let bunCLass;

  switch(props.type){
    case 'top':
      bunClass = style.bun_top
      break
    case 'insert':
      bunClass = Style.bun_insert
      break
      default:
        bunCLass = ''
  }
  return (
    <div className={ `${style.bun} ${bunCLass}`} ></div>
  )
  }


export default Bun