import { Component } from "react";
import ProductList from "../../../components/Product/ProductList";

class WomensDresses extends Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: [],
        }
    }

    componentDidMount()
    {
        fetch("https://dummyjson.com/products/category/womens-dresses?limit=4")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    products:res.products,
                });
            });
    }

    render(){
        let { isLoaded, products } = this.state;
        if(!isLoaded){
            return (
                <>
                    <div className="m-5">
                        <h2>{this.props.name}</h2>
                        <hr />
                        <div className="p-1">
                            <div className="d-flex flex-wrap justify-content-center">
                                Loding...
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {

            return(
                <>
                    <section className="my-5">
                        <div className="container text-center mt-5 py-5">
                            <h3>Best Women's Dresses</h3>
                            <hr className="mx-auto"/>
                            <p>Here you can check out best women's dresses.</p>
                        </div>
                        <div className="row mx-auto container">
                            <ProductList products={products}/>
                        </div>
                    </section>
                </>
            );
        }
    }
}

export default WomensDresses; 