import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[OrderSummary] WillUpdate!');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        })
 
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients: </p>
                { ingredientSummary }
                <p><strong>Total Price: <span>{this.props.price.toFixed(2)}</span></strong></p>
    
                <p>Continue to checkout?</p>
                <Button clicked={this.props.purchaseCancelled} btnType={'Danger'}>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType={'Success'}>CONTINUE</Button>
            </Aux>
        )
    }
} 

export default OrderSummary;