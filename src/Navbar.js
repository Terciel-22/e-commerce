import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="http://localhost:3000/">
                    <FontAwesomeIcon icon={faShoppingBag} className="me-2"/> 
                    {props.appName}
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact us</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#cart">
                                <FontAwesomeIcon icon={faCartShopping} className="me-2"/>
                                Cart <span className="badge rounded-pill text-bg-danger py-1 px-1">02</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#information" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Join us
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#mission">Sign-in</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#about-us">Sign-up</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;