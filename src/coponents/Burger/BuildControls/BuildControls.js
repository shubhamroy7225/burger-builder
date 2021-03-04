import React from 'react'
import Buildcontrol from './BuildControl/BuildControl'
import "./BuildControls.css"
let controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]
export function Buildcontrols(props) {
    return (
        <>
            <div className="BuildControls">
                <p>Current Price:<strong>{props.totalPrice.toFixed(2)}</strong></p>
                {controls.map((ctrl)=>(
                    <Buildcontrol 
                    key={ctrl.label} 
                    label={ctrl.label}
                     added={()=>props.ingreadientAdded(ctrl.type)}
                     deleted={()=>props.ingreadientDeleted(ctrl.type)}
                     disabled = {props.disabled[ctrl.type]}
                     />
                ))}
                <button className="OrderButton"
                 disabled={!props.purchasable} 
                 onClick={props.modalHandler}>ORDER NOW</button>
            </div>
        </>
    )
}
