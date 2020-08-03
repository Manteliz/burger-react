import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = props => {
    const ingredients = Object.keys(props.ingredients).map( ing => <li key={ing}>{ing}: {props.ingredients[ing]}</li> )

    return(
        <React.Fragment>
            <h3>Your Order</h3>
            <ul>{ingredients}</ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <Button type='Danger' clicked={props.canceled}>CANCEL</Button>
            <Button type='Success' clicked={props.continue}>CONTINUE</Button>
        </React.Fragment>
    )
}

export default orderSummary