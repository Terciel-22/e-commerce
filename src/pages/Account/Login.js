import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div id="login">
                <form>
                    <label htmlFor="check" aria-hidden="true">Login</label>
                    <input type="email" name="signUpEmail" id="signUpEmail" placeholder="Email" className="form-control" required/>
                    <input type="password" name="signUpPassword" id="signUpPassword" placeholder="Password" className="form-control" required/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
