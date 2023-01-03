import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Brand from "../../components/BrandClass";
import NewProduct from "../../components/NewProductClass";
import FeaturedProducts from "../../components/FeaturedProducts";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import Contact from "../../components/ContactClass";
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