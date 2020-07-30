import React from 'react'

export const UserCard = (props) => {
    return <div className='card'>
        <div className='card-body'>
            <div>{props.user.name}</div>
            <div>{<img className='img-thumbnail' src={props.user.avatarURL} alt='avatar' />}</div>
            <div>Answers {Object.keys(props.user.answers).length}</div>
            <div>Questions {Object.keys(props.user.questions).length}</div>
            <div>Score: {Object.keys(props.user.answers).length + Object.keys(props.user.questions).length}</div>
        </div>
    </div>
}