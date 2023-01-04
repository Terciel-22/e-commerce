import { Component } from "react";
import ProductList from "../../components/Product/ProductList";

class ShopProducts extends Component{
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
        fetch(`https://dummyjson.com/products/category/${this.props.category}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    products:res.products,
                });
            });
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps.category !== this.props.category) {
            fetch(`https://dummyjson.com/products/category/${this.props.category}`)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        isLoaded: true,
                        products:res.products,
                    });
                });
        }
    }

    setNewImageUrl(url)
    {
        this.setState({
            imageURL: url
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
                    <section className="py-5 my-5">
                        <div className="container mt-5">
                            <h2 className="font-weight-bold">Related Product</h2>
                            <hr />
                            <p>Check this items on the same category.</p>
                        </div>
                        <div className="row mx-auto container">
                            <ProductList 
                                products={products} 
                                setSelectedProduct={this.props.setSelectedProduct}
                            />
                        </div>
                    </section>
                </>
            );
        }
    };
}
export default ShopProducts;