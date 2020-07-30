import React from 'react'
import {
    Link,
    useRouteMatch
} from "react-router-dom";
// styles extend bootstrap pre-existing classes
import styles from './styles.css'; //eslint-disable-line

export const Menu = (props) => {
    const { url } = useRouteMatch();

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className='navbar-nav mr-auto flex-row'>
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`${url}/questions/add`}>New Question</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`${url}/leaderboard`}>Leader Board</Link>
            </li>
            <li className="nav-item">
                Hello, {props.authedUser}
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
            </li>
        </ul>
    </nav>

}