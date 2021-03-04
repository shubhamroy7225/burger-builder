import React from 'react'
import BurgerImg from "../../assets/images/burger-logo.png"
import "./Logo.css"
 function Logo(props) {
    return (
        <>
            <div className="Logo">
                <img className="img" src={BurgerImg} alt=""/>
            </div>
        </>
    )
}
export default Logo