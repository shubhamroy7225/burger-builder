import React from 'react'
import "./BuildControl.css"
export default function Buildcontrol(props) {
    return (
        <>
            <div className="BuildControl">
                <div className="Label">
                    {props.label}
                </div>
                <button className="Less" onClick={props.deleted} disabled={props.disabled}>less</button>
                <button className="More" onClick={props.added}>more</button>
            </div>
        </>
    )
}
