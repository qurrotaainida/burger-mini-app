import React from 'react'
import style from './burger.module.css'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  padding-left: 0px;
`
const Bun = (props) => {

  let bunClass;

  switch (props.type) {
    case 'top':
      bunClass = style.bun_top;
      break;
    case 'insert':
      bunClass = style.bun_insert;
      break;
    default:
      bunClass = '';
  }

  return (
  
    <div className={`${style.bun} ${bunClass}`}>
    </div>
  )
}

export default Bun