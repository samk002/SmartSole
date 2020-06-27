import React, { Component } from 'react'
import { logiUser, loginUser } from '../actions/index'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData)
        loginUser(userData, this.props.history)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Email:</label>
                        <input onChange={this.onChange} value={this.state.email} id="email" type="email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input onChange={this.onChange} value={this.state.password} id="password" type="password" />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;