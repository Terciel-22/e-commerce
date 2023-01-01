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
                            <img className="img-fluid" src="https://kevajo.com/inc/uploads/2020/02/Apple-iPhone-X-64-Go-Argent-3.jpg" alt="iPhone X"/>
                            <div className="details">
                                <h2>iPhone X</h2>
                                <button className="text-upper-case">Shop Now</button>
                            </div>
                        </div>
                        <div className="one col-lg-4 col-md-12 col-12 p-0">
                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/71JUNVmHWBL._SL1500_.jpg" alt="OPPO F19"/>
                            <div className="details">
                                <h2>OPPO F19</h2>
                                <button className="text-upper-case">Shop Now</button>
                            </div>
                        </div>
                        <div className="one col-lg-4 col-md-12 col-12 p-0">
                            <img className="img-fluid" src="https://techpilipinas.com/wp-content/uploads/2019/05/apsp-huawei-p30-price-600x600.jpg" alt="Huawei P30"/>
                            <div className="details">
                                <h2>Huawei P30</h2>
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