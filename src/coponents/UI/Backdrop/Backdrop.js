import React from 'react'

function Backdrop(props) {
    

    return (
        <>
           {props.show?<div className="Backdrop" onClick={props.closeModal}>backdrop </div>:null} 
        </>
    )
}
export default Backdrop