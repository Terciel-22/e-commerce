import Product from "./Product";

export default function ProductList({products}) {
    return(
        <>
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
        </>
    );
}