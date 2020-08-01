import React from 'react'
import { Link } from 'react-router-dom'

export const NoMatch = (props) => {
    return <div>404 - Not found. Go back to login
    <Link className="nav-link" to="/login">Login</Link>
    </div>
}