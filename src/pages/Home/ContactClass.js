import { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            serverMessage: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        // let options = {
        // 	method: 'POST',
        // 	headers: {
        // 		'Content-Type':
        // 		'application/json;charset=utf-8'
        // 	},
        // 	body: JSON.stringify(this.state)
        // }

        // let fetchRes = fetch("http://localhost:8000/message",options);
        // fetchRes.then(res => res.json())
        //         .then(data => {
        //             this.setState({
        //                 firstName: '',
        //                 lastName: '',
        //                 email: '',
        //                 message: '',
        //                 serverMessage: data,
        //             });
        //         })

    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (
            <section className="my-5 pb-5" id="contact">
                <div className="container mt-5 py-5">
                    <h2 className="text-center">Contact Us</h2>
                    <hr className="mx-auto" />
                    <div className="row mx-auto container">
                        <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                            <h4 className="mt-5">
                                Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.
                            </h4>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                            <form>
                                <div id="server-message">{this.state.serverMessage}</div>
                                <div className="row mb-3">
                                    <div className="form-group col-lg-6 col-md-12 col-12">
                                        <label htmlFor="firstName">First name</label>
                                        <input type="text" className="form-control" id="firstName" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                                    </div>
                                    <div className="form-group col-lg-6 col-md-12 col-12">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="message">What can we help you with?</label>
                                    <textarea type="text" className="form-control" id="message" name="message" rows="5" onChange={this.handleChange} value={this.state.message} />
                                </div>
                                <button onClick={this.handleClick}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;