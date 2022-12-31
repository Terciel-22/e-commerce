import { Component } from "react";

class Product extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="card p-2 m-2">
                    <img className="card-img-top img-thumbnail rounded img-fluid" src={this.props.imageURL} alt={this.props.name} />
                    <hr />
                    <div className="card-body">
                        <h6>Name:</h6>
                        <p className="card-text">{this.props.name}</p>
                        <h6>Description:</h6>
                        <p className="card-text">{this.props.description}</p>
                        <h6>Price:</h6>
                        <p className="card-text">₱{this.props.price}</p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Product;