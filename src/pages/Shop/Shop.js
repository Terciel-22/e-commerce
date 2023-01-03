import Navbar from "../../components/Navbar";
import ShopProducts from "./ShopProducts";
import Footer from "../../components/Footer";

function Shop(){
    return(
        <>
            <Navbar appName="Terciel"/>
            <ShopProducts />
            <Footer />
        </>
    );
}


export default Shop;