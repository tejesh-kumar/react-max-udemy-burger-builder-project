import React, { Component } from 'react'

import axios from '../../../axios-orders'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'

export class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {            
        e.preventDefault();
        // console.log(this.props.ingredients);

        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Tejesh',
                address: {
                    street: 'SCB road',
                    zipCode: 560070,
                    country: 'India'
                },
                email: 'tejesh@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false})
                this.props.history.push('/');           // Redirect the user once form is submitted
            })
            .catch(error => {
                this.setState({loading: false})
                console.log(error);
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="number" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if(this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData} >
                <h4>Enter your contact details</h4>
                { form }
            </div>
        )
    }
}

export default ContactData
