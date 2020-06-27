import React, { Component } from 'react'
import { logoutUser } from '../actions/index'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
        this.state = JSON.parse(localStorage.getItem('user'))
    }

    logout() {
        logoutUser()
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <br />
                <h1>{this.state.name}</h1>
                <div>
                    <button onClick={this.logout}>Logout</button>
                </div>
            </div >
        )
    }
}

export default Dashboard