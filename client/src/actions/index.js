import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { decode } from 'jsonwebtoken'

export const registerUser = async (userData, history) => {
    await axios.post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => alert("Error"))
}


export const loginUser = async (userData, history) => {
    await axios.post('/api/users/login', userData)
        .then(res => {
            const { token } = res.data
            localStorage.setItem('jwtToken', token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
            localStorage.setItem('user', JSON.stringify(decoded))
            history.push('/dashboard')
        })
}

export const isLogin = () => {
    if (localStorage.getItem('jwtToken')) {
        return true
    }
    else {
        return false
    }
}

export const logoutUser = async () => {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
}