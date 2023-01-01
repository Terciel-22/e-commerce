import { Component } from "react";
import PropTypes from "prop-types";
import Product from "./ProductClass"

class Category extends Component{
    
    static defaultProps = {
        list: [],
        name: ""
    }
    
    static propTypes = {
        list: PropTypes.array,
        name: PropTypes.string
    }
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render(){
        let products = this.props.list.map(product => <Product key={product[0]} name={product[0]} description={product[1]} price={product[2]} imageURL={product[3]} rating={5} />);
        return(
            <>
                <div className="m-5">
                    <h2>Categories</h2>
                    <hr />
                    <div className="p-1">
                        <h3>{this.props.name}</h3>
                        <div className="d-flex flex-wrap justify-content-center">
                            {products}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Category; 