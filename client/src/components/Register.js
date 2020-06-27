import React, { Component } from 'react'
import { registerUser } from '../actions/index'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            password2: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser)
        registerUser(newUser, this.props.history)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name:</label>
                        <input onChange={this.onChange} value={this.state.name} id="name" type="text" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input onChange={this.onChange} value={this.state.email} id="email" type="email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input onChange={this.onChange} value={this.state.password} id="password" type="password" />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input onChange={this.onChange} value={this.state.password2} id="password2" type="password" />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Register;