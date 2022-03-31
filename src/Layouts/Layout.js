import React from "react";
import Navigaton from './Navigation'
import MainContent from './MainContent'

const DefaultLayout = (props) => {
    return (
        <>
          <Navigaton />
          <MainContent >
           {props.children}
         </MainContent>
        </>
    )
}

export default DefaultLayout