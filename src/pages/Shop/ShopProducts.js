import { Component } from "react";
import ProductList from "../../components/Product/ProductList";
import Pagination from "./Pagination";
import SelectedProduct from "./SelectedProduct";
import RelatedProducts from "./RelatedProducts";

class ShopProducts extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: [],
            currentPage: 1,
            postPerPage: 8,
            selectedProduct: {}
        }
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.setSelectedProduct = this.setSelectedProduct.bind(this);
    }

    componentDidMount()
    {
        fetch("https://dummyjson.com/products?limit=24")
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
            currentPage: page,
            selectedProduct: {}
        });
        window.scrollTo(0, 0)
    }

    setSelectedProduct(obj)
    {
        this.setState({
            selectedProduct: obj
        });
        window.scrollTo(0, 0)
    }

    setNewImageUrl(url)
    {
        this.setState({
            imageURL: url
        });
    }

    render()
    {

        let { isLoaded, products, currentPage, postPerPage, selectedProduct } = this.state;
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
            let productSelector = ""
            if(Object.keys(selectedProduct).length !== 0)
            {
                productSelector = (
                <>
                    <SelectedProduct selectedProduct={selectedProduct} />
                    <RelatedProducts category={selectedProduct.category} setSelectedProduct={this.setSelectedProduct}/>
                </>
                );

            } else {
                productSelector = "";
            }
            
            return (
                <>
                    {productSelector}
                    <section className="">
                        <div className="container mt-5 py-5">
                            <h2 className="font-weight-bold">Our Products</h2>
                            <hr />
                            <p>Here you can check our new product with fair price.</p>
                        </div>
                        <div className="row mx-auto container">
                            <ProductList 
                                products={currentPosts} 
                                setSelectedProduct={this.setSelectedProduct}
                            />
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
