import React, {Component} from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese : 0,
            meat : 0,
            salad : 0,
            bacon : 0 
        },
        price: 4
    }

    render() {
        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls />
                <div>Modal</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;