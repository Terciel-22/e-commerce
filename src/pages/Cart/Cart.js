import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductListOnCart from './ProductListOnCart';

    const Cart = () => {
        return (
            <>
                <Navbar appName="Terciel"/>

                <section id="cart-home" className="pt-5 mt-5 container">
                    <h2 className="font-weight-bold pt-5">Shopping Cart</h2>
                    <hr />
                </section>
                <ProductListOnCart />
                
                <Footer />
            </>
        );
    }

export default Cart