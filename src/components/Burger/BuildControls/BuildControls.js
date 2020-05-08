import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const INGREDIENTS = ['cheese', 'meat', 'salad', 'bacon'];

const buildControls = props =>
    <div className={classes.BuildControls}>
        <p>PRICE : <strong>{props.price.toFixed(2)}</strong></p>
        {INGREDIENTS.map(ing => 
        <BuildControl 
            key={ing} 
            label={ing} 
            add={() => props.add(ing)} 
            remove={() => props.remove(ing)}
            disabled={props.disabled[ing]}
        />)}
        <button 
            className={classes.OrderButton} 
            onClick={props.order}
            disabled={!props.purchasable}
        >ORDER NOW</button>
    </div>;

export default buildControls;