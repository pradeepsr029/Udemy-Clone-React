import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/shoppingCart.scss';

class ShoppingCart extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='full-row'>
                <div className='container'>
                    <div className='row shop-row'>
                        <h1>Shopping Cart</h1>
                        <p className='added-course-count'>0 Courses in Cart</p>
                        <div className='col-12 sc-shopping-list'>
                            <div className='sc-shopping-list--empty'>
                                <img width="240" height="180" src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg" alt="Empty Shopping card" />
                                <p>Your cart is empty. Keep shopping to find a course!</p>
                                <Link to="/home" className="btn btn-primary" data-purpose="keep-shopping-action">Keep shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShoppingCart;