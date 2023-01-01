import { Component } from "react";
import Product from "./ProductClass";

class FeaturedProducts extends Component{
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
        fetch("https://dummyjson.com/products?limit=8&skip=1&select=title,price,rating,images")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    products:res.products,
                });
            });
    }

    render()
    {
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
        } else 
        {
            return (
                <>
                    <section className="my-5 pb-5">
                        <div className="container text-center mt-5 py-5">
                            <h3>Our Featured</h3>
                            <hr className="mx-auto"/>
                            <p>Here you can check our new product with fair price.</p>
                        </div>
                        <div className="row mx-auto container">
                            {products.map( product => 
                                <Product 
                                    key={product.id} 
                                    name={product.title} 
                                    description={product.description} 
                                    price={product.price} 
                                    imageURL={product.images[0]} 
                                    rating={product.rating}
                                />
                            )}
                        </div>
                    </section>
                </>
            );
        }
    };
}
export default FeaturedProducts;