import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    let ing = Object.keys(props.ingredients).map(igKey => [...Array(props.ingredients[igKey])].map( (_, i) =>
        <BurgerIngredient type={igKey} key={igKey+i} />
    )).reduce((accumulator, curr) => accumulator.concat(curr), []);

    if (ing.length === 0) ing = <p>Please Start Adding Ingredients!</p>;

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ing}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;