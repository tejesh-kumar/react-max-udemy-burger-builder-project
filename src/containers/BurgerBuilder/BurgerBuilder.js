import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     meat: 0,
        //     cheese: 0,
        //     salad: 0
        // }
    }

    render() {
        return (
            <Aux>
                <Burger />{/* <div>Burger</div> */}
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;