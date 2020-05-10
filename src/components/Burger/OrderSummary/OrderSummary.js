import React from 'react';
import Aux from '../../../hoc/Auxilliary';

const orderSummary = props => {
    const ingredients = Object.keys(props.ingredients).map( ing => <li key={ing}>{ing}: {props.ingredients[ing]}</li> );

    return(
        <Aux>
            <h3>Order Summary:</h3>
            <ul>{ingredients}</ul>
            <button>CHECKOUT</button>
        </Aux>
    );
}

export default orderSummary;