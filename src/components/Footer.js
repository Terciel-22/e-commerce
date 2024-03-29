import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer id="footer" className="mt-5 py-5">
            <div className="row container mx-auto pt-5">
                <div className="footer-one col-lg-3 col-md-6 col-12">
                    <h4>Terciel</h4>
                    <p className="pt-3">This is an E-commerce Website created in ReactJS and DummyJson API.</p>
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="pb-2">Featured</h5>
                    <ul className="text-uppercase list-unstyled">
                        <li><a href="#phone">Smartphones</a></li>
                        <li><a href="#tablet">Laptops</a></li>
                        <li><a href="#laptop">Fragrances</a></li>
                        <li><a href="#skincare">Skincare</a></li>
                        <li><a href="#home-decoration">Home Decoration</a></li>
                        <li><a href="#dresses-and-shirt">Dresses & Shirt</a></li>
                        <li><a href="#others">Others</a></li>
                    </ul>
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="pb-2">Contact Us</h5>
                    <div>
                        <h6 className="text-uppercase">Address</h6>
                        <p>Naic, Cavite, Philippines</p>
                    </div>
                    <div>
                        <h6 className="text-uppercase">Phone</h6>
                        <p>+639392089105</p>
                    </div>
                    <div>
                        <h6 className="text-uppercase">Email</h6>
                        <p>dietherfiel@gmail.com</p>
                    </div>
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12">
                    <h5 className="pb-2">Instagram</h5>
                    <div className="d-flex flex-wrap">
                        <img className="img-fluid m-2" src="https://i.pinimg.com/originals/63/f3/e4/63f3e43184b39d0e2ebedbc6f16c9986.jpg" alt="random" />
                        <img className="img-fluid m-2" src="https://i.pinimg.com/236x/f2/d4/2e/f2d42ef9dd6938990d9be4bdd54cbf7f--nature-photos-white-photography.jpg" alt="random" />
                        <img className="img-fluid m-2" src="https://i.pinimg.com/236x/1b/3a/f4/1b3af4bdcdde61ed5945db32e5d72c7c--cute-senior-pictures-railroad-tracks.jpg" alt="random" />
                        <img className="img-fluid m-2" src="https://w0.peakpx.com/wallpaper/1014/995/HD-wallpaper-hood-black-grey-man-random-white.jpg" alt="random" />
                        <img className="img-fluid m-2" src="https://images.unsplash.com/photo-1660766217280-5cd1afad50ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTk5MjAyMDF8fGVufDB8fHx8&w=1000&q=80" alt="random" />
                        <img className="img-fluid m-2" src="https://w0.peakpx.com/wallpaper/602/602/HD-wallpaper-meh-empty-black-weird-sad-me-white-random-face-sad-face.jpg" alt="random" />
                    </div>
                </div>
            </div>
            <div className="copyright mt-5">
                <div className="row container mx-auto">
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-4">
                        <img src="https://blog.logomyway.com/wp-content/uploads/2022/02/visa-logo-2.jpg" alt="Visa" />
                        <img src="https://static.vecteezy.com/system/resources/previews/009/469/637/original/paypal-payment-icon-editorial-logo-free-vector.jpg" alt="PayPal" />
                        <img src="https://orangemagazine.ph/wp-content/uploads/2022/03/GCash-Logo.png" alt="GCash" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center mb-2">
                        <p className="align-middle">Terciel e-commerce © 2023. All Rights Reserve.</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <a href="https://www.facebook.com/terfimacel"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.twitter.com/fierryterry"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.linkedin.com/in/diether-mark-abraham-fiel"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;