import { Component } from "react";

class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            content: '',
            addMessage: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(this.state),
        }

        fetch('http://localhost:8000/message.php', options)
            .then((response)=>response.text);
    }

    handleChange(event){
        event.preventDefault();
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    render(){
        return(
            <div className="m-5">
                <h2>Contact Us</h2>
                <hr />
                <div className="p-1">
                    <div className="row">
                        <div className="col-md-6 p-5">
                            <h4 className="mt-5">
                                Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.
                            </h4>
                        </div>
                        <div className="col-md-6 p-5">
                            <form>
                                <div id="server-message"></div>
                                <div className="d-flex mb-3">
                                    <div className="form-group me-2">
                                        <label htmlFor="firstName">First name</label>
                                        <input type="text" className="form-control" id="firstName"  name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="content">What can we help you with?</label>
                                    <textarea type="text" className="form-control" id="content" name="content" rows="5" onChange={this.handleChange} value={this.state.content}/>
                                </div>
                                <button className="btn btn-outline-primary" onClick={this.handleClick}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;