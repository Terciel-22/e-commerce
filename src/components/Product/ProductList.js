import Product from "./Product";

export default function ProductList({products, setSelectedProduct}) {
    ProductList.defaultProps = {
        products: {},
        setSelectedProduct: ()=>{}
    }
    return(
        <>
            {products.map( (product,index) => 
                <Product 
                    key = {index}
                    product = {product}
                    setSelectedProduct={setSelectedProduct}
                />
            )}
        </>
    );
}