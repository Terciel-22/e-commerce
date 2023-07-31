import { useRef } from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SignUp from './SignUp';
import Login from './Login';

const Account = () => {

    const indicator = useRef(null);

    function handleClick(event) {
        if (event.target.innerHTML === "Login") {
            document.querySelector("#account-page > div > div:nth-child(2) > div > form:nth-child(3)").style.transform = "translateX(18.75rem)";
            document.querySelector("#account-page > div > div:nth-child(2) > div > form:nth-child(2)").style.transform = "translateX(18.75rem)";
            indicator.current.style.transform = "translateX(0)";
        } else {
            document.querySelector("#account-page > div > div:nth-child(2) > div > form:nth-child(3)").style.transform = "translateX(0px)";
            document.querySelector("#account-page > div >  div:nth-child(2) > div > form:nth-child(2)").style.transform = "translateX(0px)";
            indicator.current.style.transform = "translateX(6.25rem)";
        }
    }

    return (
        <>
            <Navbar appName="Terciel" />

            <section id="account-page" className="pt-5 mt-5 container">
                <div className="row mb-3 align-items-center pt-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h2 className="font-weight-bold">Join us</h2>
                        <hr />
                        <p>We are excited to invite you to become a member of Your E-commerce Store - your one-stop destination for all your shopping needs!</p>
                        <p>Why join us?</p>
                        <ul>
                            <li>Access to a vast selection of high-quality products from trusted brands.</li>
                            <li>Exclusive deals and discounts for our valued members.</li>
                            <li>Fast and secure checkout process for a seamless shopping experience.</li>
                            <li>Personalized recommendations based on your preferences and shopping history.</li>
                            <li>24/7 customer support to assist you with any inquiries or issues.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-container">
                            <div className="form-btn">
                                <span onClick={handleClick}>Login</span>
                                <span onClick={handleClick}>Sign Up</span>
                                <hr ref={indicator} />
                            </div>

                            <Login />
                            <SignUp />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Account