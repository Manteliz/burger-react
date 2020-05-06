import React, {Component} from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

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

    addIngredientHandler = type => {
        let newIngredients = this.state.ingredients;
        newIngredients[type]++;
        const newPrice = this.state.price + INGREDIENT_PRICES[type];
        this.setState({ingredients : newIngredients, price : newPrice});
    }

    removeIngredientHandler = type => {
        let newIngredients = this.state.ingredients;
        if (newIngredients[type] > 0) {
            newIngredients[type]--;
            const newPrice = this.state.price - INGREDIENT_PRICES[type];
            this.setState({ingredients : newIngredients, price : newPrice});
        }
    }

    render() {
        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls add={this.addIngredientHandler} remove={this.removeIngredientHandler} />
                <div>Modal</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;