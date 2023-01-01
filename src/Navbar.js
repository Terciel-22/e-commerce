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
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#shop">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-us">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <FontAwesomeIcon icon={faSearch} className="nav-icon"/>
                            <FontAwesomeIcon icon={faCartShopping} className="nav-icon"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;