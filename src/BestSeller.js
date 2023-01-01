import { Component } from "react";
import PropTypes from "prop-types";
import Product from "./ProductClass"

class BestSeller extends Component{
    
    static defaultProps = {
        name: ""
    }
    
    static propTypes = {
        name: PropTypes.string
    }
    
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
        fetch('https://dummyjson.com/products')
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
                    <section className="my-5 pb-5">
                        <div className="container text-center mt-5 py-5">
                            <h3>Our Best Seller</h3>
                            <hr className="mx-auto"/>
                            <p>Here you can check out best sold products as of 2022.</p>
                        </div>
                        <div className="row mx-auto container">
                            {products.map( product => 
                                <Product 
                                    key={product.id} 
                                    name={product.title} 
                                    description={product.description} 
                                    price={product.price} 
                                    imageURL={product.thumbnail} 
                                    rating={product.rating}
                                />
                            )}
                        </div>
                    </section>
                </>
            );
        }
    }
}

export default BestSeller; 