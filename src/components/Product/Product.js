import { Component } from "react";
import Buttons from "../../ui/Buttons";
import Rating from "./RatingClass";

class Product extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="product text-center col-lg-3 col-md-4 col-12" onClick={()=>this.props.setSelectedProduct(this.props.product)}>
                    <img className="img-fluid mb-3" src={this.props.product.thumbnail} alt={this.props.product.name}/>
                    <Rating rating={this.props.product.rating} />
                    <h5 className="text-uppercase">{this.props.product.title}</h5>
                    <h3>${this.props.product.price}</h3>
                    <Buttons />
                </div>
            </>
        );
    }
}

export default Product;