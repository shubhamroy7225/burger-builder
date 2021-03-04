import React from 'react'
import BurgerImg from "../../assets/images/burger-logo.png"
import "./Logo.css"
export default function Logo(props) {
    

    return (
        <>
            <div className="Logo">
                <img className="img" src={BurgerImg} alt=""/>
            </div>
        </>
    )
}
