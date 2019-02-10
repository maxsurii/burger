import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = (props) =>{
    //const tranformedIngredients = Object.keys(props.ingredients)
   // .map()

    return(
        <div className={classes.Burger}>
           <BurgerIngredient type={'bread-top'}/>
           <BurgerIngredient type="cheese"/>
           <BurgerIngredient type="meat"/>
           <BurgerIngredient type="bread-bottom"/>

        </div>
      
    )



}

export default Burger