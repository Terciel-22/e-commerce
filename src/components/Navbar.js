import { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            cartTotalProducts: ""
        }
    }

    componentDidMount()
    {
        fetch("https://dummyjson.com/carts/1")
            .then(res => res.json())
            .then(cart => {
                this.setState({
                    cartTotalProducts: cart.totalProducts
                });
            });
    }

    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="http://localhost:3000/">
                        <FontAwesomeIcon icon={faShoppingBag} className="me-2"/> 
                        {this.props.appName}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><FontAwesomeIcon icon={faBars} id="bar"/></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/shop">Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Join Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/cart" className="nav-link">
                                        <span className="pe-1"><FontAwesomeIcon icon={faCartShopping} /></span>
                                        Cart
                                        <span className="position-absolute ms-1 badge badge-pill bg-danger p-1">{this.state.cartTotalProducts}</span>
                                    </NavLink>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;