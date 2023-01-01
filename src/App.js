import Navbar from "./Navbar";
import Header from "./Header";
import Brand from "./BrandClass";
import NewProduct from "./NewProductClass";
import FeaturedProducts from "./FeaturedProducts";
import Banner from "./Banner";
// import Content from "./ContentClass";
import Footer from "./Footer";

function App() {
    return (
        <>
            <Navbar appName="Terciel" />
            <Header />
            <Brand />
            <NewProduct />
            <FeaturedProducts />
            <Banner />
            {/* <Content /> */}
            <Footer />
        </>
    );
}

export default App;