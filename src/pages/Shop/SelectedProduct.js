import {Component} from 'react';
import Images from '../../components/Product/Images';
import Rating from '../../components/Product/RatingClass';
import Buttons from '../../ui/Buttons';

class SelectedProduct extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
        this.state = {
            imageURL: "",
            quantity: 1
        };
        this.setNewImageUrl = this.setNewImageUrl.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            imageURL: this.props.selectedProduct.thumbnail
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedProduct.thumbnail !== this.props.selectedProduct.thumbnail) {
            this.setState({
                imageURL: this.props.selectedProduct.thumbnail,
                quantity: 1
            });
        }
    }

    setNewImageUrl(url)
    {
        this.setState({
            imageURL: url
        });
    }

    handleChange(event)
    {
        event.preventDefault();
        this.setState({
            quantity: event.target.value
        });
    }

    render(){
        return (
            <section className="container my-5 pt-5" id="selected-product">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <img className="img-fluid w-100 border mb-2" src={this.state.imageURL} alt={this.props.selectedProduct.title}/>
                        <div className="small-img-group">
                            {this.props.selectedProduct.images.slice(0, 4).map( (url,index) => 
                                <Images 
                                    key={index} 
                                    src={url}
                                    alt={this.props.selectedProduct.title}
                                    setNewImageUrl={this.setNewImageUrl}
                                />
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12">
                        <h6 className="text-uppercase">{this.props.selectedProduct.category} / {this.props.selectedProduct.brand}</h6>
                        <h3 className="py-4">{this.props.selectedProduct.title}</h3>
                        <h2>${this.props.selectedProduct.price}.00</h2>
                        <input type="number" value={this.state.quantity} onChange={this.handleChange}/>
                        <Rating rating={this.props.selectedProduct.rating} />
                        <Buttons />
                        <h4 className="mt-5 mb-4">Product Details</h4>
                        <span>{this.props.selectedProduct.description}</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default SelectedProduct