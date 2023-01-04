import { Component } from "react";

class Brand extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <>
                <section id="brand" className="container">
                    <div className="row m-0 py-5">
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/1.png" alt="Right Check"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/2.png" alt="Cinderela"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/3.png" alt="SLS Business"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/4.png" alt="Comedy"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/5.png" alt="Right Check"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/6.png" alt="Skill Star"/>
                    </div>
                </section>
            </>
        );
    };
}
export default Brand;