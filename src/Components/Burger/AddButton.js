import React from "react";

import style from './controller.module.css'

const AddButton = (props) => {
    return (
        <button className={style.add_buton} onClick={props.click.Handler}>{props.label}</button>
    )
}

export default AddButton