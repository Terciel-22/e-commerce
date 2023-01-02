import { Component } from "react";
import Rating from "./RatingClass";

class Product extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="product text-center col-lg-3 col-md-4 col-12">
                    <img className="img-fluid mb-3" src={this.props.imageURL} alt={this.props.name}/>
                    <Rating rating={this.props.rating} />
                    <h5 className="text-uppercase">{this.props.name}</h5>
                    <h3>${this.props.price}</h3>
                    <button className="buy-btn">Add to cart</button>
                </div>
            </>
        );
    }
}

export default Product;