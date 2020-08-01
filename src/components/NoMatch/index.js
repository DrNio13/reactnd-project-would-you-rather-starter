import React from 'react'
import { Link } from 'react-router-dom'

export const NoMatch = (props) => {
    return <div>404 - We couldn't find what you were looking for. Go back to login
    <Link className="nav-link" to="/">Login</Link>
    </div>
}