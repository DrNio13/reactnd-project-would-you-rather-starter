import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export const WouldYourRatherCard = (props) => {
    const { url } = useRouteMatch();

    return <div className='card' key={props.question.id}>
        <div className='card-body'>
            <div className='card-title'>
                <img alt='avatar' src={props.users[props.question.author]['avatarURL']} className='img-thumbnail' />
                {props.users[props.question.author]['name']} asks:</div>
            <h3>Would you rather</h3>
            <div className='card-text'>...{props.question.optionOne.text}...</div>
            <Link to={`${url}/questions/${props.question.id}`}>
                View poll
        </Link>
        </div>
    </div>
}
