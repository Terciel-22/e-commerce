import { Component } from 'react'
import ProductOnCart from './ProductOnCart';

class ProductListOnCart extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            isLoaded: false,
            products: {},
            coupon: "",
            totalQuantity: 0,
            totalPrice: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.setTotalPrice = this.setTotalPrice.bind(this);
    }

    componentDidMount()
    {
        fetch("https://dummyjson.com/carts/1")
            .then(res => res.json())
            .then(cart => {
                this.setState({
                    isLoaded: true,
                    products: cart.products,
                    totalQuantity: cart.totalQuantity,
                    totalPrice: cart.total
                });
            });
    }

    handleChange(event)
    {
        event.preventDefault();
        this.setState({
            coupon: event.target.value
        });
    }

    setTotalPrice(differenceInTotal)
    {
        this.setState({
            totalPrice: this.state.totalPrice - differenceInTotal
        });
    }

    render() {
        const {isLoaded, products, totalPrice} = this.state;
        let shippingFee = Math.round(totalPrice * 0.05 * 10)/10;

        if(!isLoaded){
            return (
                <section id="cart-container" className="container">
                    Loading...
                </section>
            );
        } else
        {
            return (
                <>
                    <section id="cart-container">
                        <table width="100%" className="container my-5">
                            <thead>
                                <tr>
                                    <td>Remove</td>
                                    <td>Image</td>
                                    <td>Product</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product,index)=>
                                    <ProductOnCart 
                                        key={index} 
                                        product={product} 
                                        setTotalPrice={this.setTotalPrice}
                                    />
                                )}
                            </tbody>
                        </table>
                    </section>

                    <section id="cart-bottom" className="container">
                        <div className="row">
                            <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
                                <div>
                                    <h5>COUPON</h5>
                                    <p>Enter your coupon code if you have one.</p>
                                    <input type="text" onChange={this.handleChange} value={this.state.coupon} placeholder="Coupon Code" className="me-1" />
                                    <button>APPLY COUPON</button>
                                </div>
                            </div>
                            <div className="total col-lg-6 col-md-6 col-12">
                                <div>
                                    <h5>CART TOTAL</h5>
                                    <div className="d-flex justify-content-between">
                                        <h6>Total Price</h6>
                                        <p>${this.state.totalPrice}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6>Shipping Fee</h6>
                                        <p>${shippingFee}</p>
                                    </div>
                                    <hr className="second-hr"/>
                                    <div className="d-flex justify-content-between">
                                        <h6>Total</h6>
                                        <p>${this.state.totalPrice + shippingFee}</p>
                                    </div>
                                    
                                    <button className="ms-auto">PROCEED TO CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            );
        }
    }
}

export default ProductListOnCart