import { Component } from "react";
import Navbar from "../Navbar";
import ShopProducts from "./ShopProducts";
import Footer from "../Footer";

class Shop extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
    }

    render() 
    {
        return(
            <>
                <Navbar appName="Terciel"/>
                <ShopProducts />
                <Footer />
            </>
        );
    }
}

export default Shop;