import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
            <div className="container">
                <a className="navbar-brand" href="http://localhost:3000/">
                    <FontAwesomeIcon icon={faShoppingBag} className="me-2"/> 
                    {props.appName}
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
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <FontAwesomeIcon icon={faSearch} className="nav-icon"/>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faCartShopping} className="nav-icon"/>
                                </NavLink>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;