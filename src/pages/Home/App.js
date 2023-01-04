import Navbar from "../../components/Navbar";
import Header from "./Header";
import Brand from "./BrandClass";
import NewProduct from "./NewProductClass";
import FeaturedProducts from "./FeaturedProducts";
import Banner from "./Banner";
import Categories from "./Categories";
import Contact from "./ContactClass";
import Footer from "../../components/Footer";

function App() {
    return (
        <>
            <Navbar appName="Terciel" />
            <Header />
            <Brand />
            <NewProduct />
            <FeaturedProducts />
            <Banner />
            <Categories />
            <Contact />
            <Footer />
        </>
    );
}

export default App;