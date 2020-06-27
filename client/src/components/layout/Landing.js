import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Landing extends Component {
    render() {
        return (
            <div>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/register">Register</Link>
                <br />
                <Link to="/dashboard">Dashboard</Link>
            </div>
        )
    }
}

export default Landing;