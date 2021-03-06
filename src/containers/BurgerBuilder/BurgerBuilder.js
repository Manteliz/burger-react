import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese : 0,
            meat : 0,
            salad : 0,
            bacon : 0 
        },
        price: 4,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {

    }

    addIngredientHandler = type => {
        let newIngredients = this.state.ingredients
        newIngredients[type]++
        const newPrice = this.state.price + INGREDIENT_PRICES[type]
        this.setState({ingredients : newIngredients, price : newPrice})
        this.updatePurchasableState()
    }

    removeIngredientHandler = type => {
        let newIngredients = this.state.ingredients
        if (newIngredients[type] > 0) {
            newIngredients[type]--
            const newPrice = this.state.price - INGREDIENT_PRICES[type]
            this.setState({ingredients : newIngredients, price : newPrice})
            this.updatePurchasableState()
        }
    }

    orderClickedHandler = () => this.setState({purchasing: true})

    orderCanceledHandler = () => this.setState({purchasing: false})

    continueHandler = () => alert('You Continue!')

    updatePurchasableState() {
        const ing = {...this.state.ingredients}
        const sum = Object.values(ing).reduce((acc, curr) => acc + curr)
        this.setState({purchasable : sum > 0})
    }

    render() {
        const ingredientInfo = {...this.state.ingredients}
        for (let key in ingredientInfo){
            ingredientInfo[key] = ingredientInfo[key] <= 0
        }

        return(
            <React.Fragment>
                <Modal show={this.state.purchasing} cancel={this.orderCanceledHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        canceled={this.orderCanceledHandler} 
                        continue={this.continueHandler}
                        price={this.state.price}
                    />
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls 
                    add={this.addIngredientHandler} 
                    remove={this.removeIngredientHandler} 
                    disabled={ingredientInfo} 
                    price={this.state.price} 
                    order={this.orderClickedHandler}
                    purchasable={this.state.purchasable}
                />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder