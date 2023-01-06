import { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div id="sign-up">
                <form>
                    <label htmlFor="check" aria-hidden="true">Sign Up</label>
                    <input type="text" name="signUpUsername" placeholder="Username" className="form-control" required/>
                    <input type="email" name="signUpEmail" placeholder="Email" className="form-control" required/>
                    <input type="password" name="signUpPassword" placeholder="Password" className="form-control" required/>
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}
