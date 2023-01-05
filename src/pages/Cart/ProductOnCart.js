import {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

class ProductOnCart extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            productQuantity: 0,
            total: 0,
            image:""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount()
    {
        fetch("https://dummyjson.com/products/"+this.props.product.id)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    productQuantity: this.props.product.quantity,
                    total: this.props.product.total,
                    image: data.thumbnail
                });
            });
    }

    handleChange(event)
    {
        event.preventDefault();
        const newTotal = event.target.value * this.props.product.price;
        this.props.setTotalPrice(this.state.total - newTotal);
        this.setState({
            productQuantity: event.target.value,
            total:  newTotal
        });
    }

    render()
    {
        return (
            <tr>
                <td><a href="#delete"><FontAwesomeIcon icon={faTrashCan} className="icon"/></a></td>
                <td><img src={this.state.image} alt={this.props.product.title} /></td>
                <td>{this.props.product.title}</td>
                <td>${this.props.product.price}</td>
                <td><input type="number" value={this.state.productQuantity} min={0} onChange={this.handleChange} className="w-25 pl-1" /></td>
                <td>${this.state.total}</td>
            </tr>
        );
    }
}

export default ProductOnCart