import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const INGREDIENTS = ['cheese', 'meat', 'salad', 'bacon'];

const buildControls = props =>
    <div className={classes.BuildControls}>
        {INGREDIENTS.map(ing => 
        <BuildControl 
            key={ing} 
            label={ing} 
            add={() => props.add(ing)} 
            remove={() => props.remove(ing)}
            disabled={props.disabled[ing]}
        />)}
        <div> Order Button </div>   
    </div>;

export default buildControls;