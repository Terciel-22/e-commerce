import { Component } from "react";

class NewProduct extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <>
                <section id="new" className="w-100">
                    <div className="row p-0 m-0">
                        <div className="one col-lg-4 col-md-12 col-12 p-0">
                            <img className="img-fluid" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/new/1.jpg" alt="Shoes"/>
                            <div className="details">
                                <h2>Extreme Rare Sneakers</h2>
                                <button className="text-upper-case">Shop Now</button>
                            </div>
                        </div>
                        <div className="one col-lg-4 col-md-12 col-12 p-0">
                            <img className="img-fluid" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/new/5.jpg" alt="Jewelry"/>
                            <div className="details">
                                <h2>Awesome Blank Outfit</h2>
                                <button className="text-upper-case">Shop Now</button>
                            </div>
                        </div>
                        <div className="one col-lg-4 col-md-12 col-12 p-0">
                            <img className="img-fluid" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/new/3.jpg" alt="Wrist Watch"/>
                            <div className="details">
                                <h2>Sport Wear Up To 50% Off</h2>
                                <button className="text-upper-case">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };
}
export default NewProduct;