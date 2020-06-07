import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}                                      // global constants in uppercase.

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 0
        },
        totalPrice: 4                              // base price - $4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0) {
            // Disable the less button if any ingredient is zero.
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    render() {
        const  disabledInfo = {
            ...this.state.ingredients
        }

        for(let type in disabledInfo) {
            disabledInfo[type] = disabledInfo[type] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo} />
            </Aux>
        );
    }

}

export default BurgerBuilder;