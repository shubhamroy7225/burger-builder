import React from 'react'
import "./NavigationItems.css"
import Navigationitem from './NavigationItem/NavigationItem'

 function Navigationitems(props) {
    return (
        <>
           <ul className="NavigationItems">
               <Navigationitem link="/" active>Burger Builder</Navigationitem>
               <Navigationitem link="/" >CheckOut</Navigationitem>
           </ul>
        </>
    )
}
export default Navigationitems