import React from 'react'
import SignUp from './SignUp';
import Login from './Login';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Account = () => {
    return (
        <>
            <Navbar appName="Terciel"/>

            <section id="account-page" className="container w-75">
                <input type="checkbox" id="check" aria-hidden="true"/>
                <SignUp />
                <Login />
            </section>

            <Footer />
        </>
    );
}

export default Account