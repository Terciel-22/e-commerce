import {useRef} from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SignUp from './SignUp';
import Login from './Login';

const Account = () => {
    
    const indicator = useRef(null);
    
    function handleClick(event) {
        if(event.target.innerHTML === "Login")
        {
            document.querySelector("#account-page > div > div > div:nth-child(2) > div > form:nth-child(3)").style.transform = "translateX(18.75rem)";
            document.querySelector("#account-page > div > div > div:nth-child(2) > div > form:nth-child(2)").style.transform = "translateX(18.75rem)";
            indicator.current.style.transform = "translateX(0)";
        } else 
        {
            document.querySelector("#account-page > div > div > div:nth-child(2) > div > form:nth-child(3)").style.transform = "translateX(0px)";
            document.querySelector("#account-page > div > div > div:nth-child(2) > div > form:nth-child(2)").style.transform = "translateX(0px)";
            indicator.current.style.transform = "translateX(6.25rem)";
        }
    }

    return (
        <>
            <Navbar appName="Terciel"/>

            <section id="account-page" className="mt-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <h1 className="text-center">Connect with us</h1>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="form-container">
                                <div className="form-btn">
                                    <span onClick={handleClick}>Login</span>
                                    <span onClick={handleClick}>Sign Up</span>
                                    <hr ref={indicator}/>
                                </div>
                                
                                <Login />
                                <SignUp />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Account