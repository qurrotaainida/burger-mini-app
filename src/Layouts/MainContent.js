import React from "react";

import style from './layout.module.css'

const MainContent = (props) => {
    return (
        <div className={style.main_content}>
            {props.chilidren}
        </div>
    )
}

export default MainContent