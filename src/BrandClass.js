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
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="Apple"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://i.pinimg.com/originals/05/0a/c9/050ac92cb432973286bbba0b3637f17c.jpg" alt="Samsung"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://download.logo.wine/logo/Oppo/Oppo-Logo.wine.png" alt="OPPO"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" alt="HP"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://i.pinimg.com/originals/98/a3/2e/98a32e0ef25e6148b8a08954956eb0e4.png" alt="Infinix"/>
                        <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png" alt="Huawei"/>
                    </div>
                </section>
            </>
        );
    };
}
export default Brand;