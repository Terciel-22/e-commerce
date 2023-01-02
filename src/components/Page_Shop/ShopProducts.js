import { Component } from "react";
import ProductList from "../Product/ProductList";
import Pagination from "./Pagination";

class ShopProducts extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: [],
            currentPage: 1,
            postPerPage: 8,
        }
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    componentDidMount()
    {
        fetch("https://dummyjson.com/products?limit=100&skip=1")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    products:res.products,
                });
            });
    }

    setCurrentPage(page)
    {
        this.setState({
            currentPage: page
        });
    }

    render()
    {

        let { isLoaded, products, currentPage, postPerPage } = this.state;
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
            const lastPostIndex = currentPage * postPerPage;
            const firstPostIndex = lastPostIndex - postPerPage;
            const currentPosts = products.slice(firstPostIndex,lastPostIndex);
            return (
                <>
                    <section className="my-5 py-5">
                        <div className="container mt-5 py-5">
                            <h2 className="font-weight-bold">Our Products</h2>
                            <hr />
                            <p>Here you can check our new product with fair price.</p>
                        </div>
                        <div className="row mx-auto container">
                            <ProductList products={currentPosts} />
                            <Pagination
                                totalPost={products.length} 
                                postPerPage={postPerPage} 
                                setCurrentPage={this.setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </section>
                </>
            );
        }
    };
}
export default ShopProducts;