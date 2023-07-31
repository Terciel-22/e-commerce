import { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class About extends Component {
    render() {
        return (
            <>
                <Navbar appName="Terciel" />

                <section id="about" className="pt-5 mt-5 container">
                    <h2 className="font-weight-bold pt-5">About us</h2>
                    <hr />

                    <div className="row flex-lg-row flex-md-row flex-column-reverse">
                        <div className="col-lg-6 col-md-6 col-12">
                            <p>Welcome to Your E-commerce Store! We are passionate about providing the best shopping experience for our customers. Our goal is to offer a wide selection of high-quality products and top-notch customer service. Whether you're looking for the latest fashion trends, electronic gadgets, or home essentials, we've got you covered.</p>
                            <p>At Your E-commerce Store, we believe in creating lasting relationships with our customers. Our team works tirelessly to ensure that your online shopping journey is smooth, secure, and enjoyable.</p>
                            <p>We value your feedback and suggestions, so please don't hesitate to contact us. Thank you for choosing Your E-commerce Store as your preferred online shopping destination!</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src="https://cdn2.hubspot.net/hubfs/53/ecommerce-10.jpg" alt="Shopping cart" className="img-thumbnail" />
                        </div>
                    </div>

                </section>

                <Footer />
            </>
        );
    }
}

export default About;