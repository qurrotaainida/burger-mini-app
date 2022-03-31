import React from "react";
import { Link } from "react-router-dom"

import style from './layout.module.css'

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <di className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="px-2"><Link to="/" className={style.navigation_item}>Home</Link></div>
                            <div className="px-2"><Link to="/burger-maker" className={style.navigation_item}>Burger Maker</Link></div>
                        </div>
                    </div>
                </div>
            </di>
        </div>
    )
}

export default Navigation