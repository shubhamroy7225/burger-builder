import React from 'react'
import "./Burger.css" 
import BurgerIngredient from './Burgeringredient/Burgeringredient'
const burger = (props)=> {
    let transformIngreadient = Object.keys(props.ingreadient).map((igkey)=>{
        return [...Array(props.ingreadient[igkey])].map((_,i)=>{
            return <BurgerIngredient key={igkey+i} type={igkey} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    if(transformIngreadient.length === 0){
        transformIngreadient = <p>please start adding ingredients!</p>
    }
    

    return (
        <>
           <div className="Burger">
               <BurgerIngredient type="bread-top" />
              {transformIngreadient}
               <BurgerIngredient type="bread-bottom" />
           </div>
        </>
    )
}
export default burger