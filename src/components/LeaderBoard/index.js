import React from 'react'
import { connect } from 'react-redux'
import { UserCard } from '../UserCard';

const LeaderBoard = (props) => {
    return <div>
        <h3>Leader board</h3>
        {Object.values(props.users).sort((a, b) => (Object.keys(b.answers).length + Object.keys(b.questions).length) - (Object.keys(a.answers).length + Object.keys(a.questions).length)).map(user => <div key={user.id}>
            <UserCard user={user} />
        </div>)}
    </div>
}

function mapStateToProps({ users, authedUser, questions }) {
    return {
        usersIds: Object.keys(users),
        users,
        questions,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)