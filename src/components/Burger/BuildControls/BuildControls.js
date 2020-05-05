import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls = () =>
    <div className={classes.BuildControls}>
        <BuildControl label='cheese' />
        <BuildControl label='meat' />
        <BuildControl label='salad' />
        <BuildControl label='bacon'/>
        <div> Order Button </div>
    </div>;

export default buildControls;