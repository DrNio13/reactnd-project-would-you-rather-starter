import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import { Menu } from '../Menu';
import { Redirect } from 'react-router';
import Question from '../../components/Question';
import NewQuestion from '../NewQuestion';
import { Home } from '../Home';
import LeaderBoard from '../LeaderBoard';

const Dashboard = (props) => {
    return props.authedUser ? <div>
        <Menu authedUser={props.users[props.authedUser]['name']} />
        <Switch>
            <Route exact path='/dashboard'>
                <Home authedUser={props.users[props.authedUser]['id']} dispatch={props.dispatch} users={props.users} questions={props.questions} />
            </Route>
            <Route exact path="/dashboard/questions/add">
                <NewQuestion authedUser={props.authedUser} />
            </Route>
            <Route exact path="/dashboard/questions/:questionId">
                <Question dispatch={props.dispatch} users={props.users} authedUser={props.authedUser} questions={props.questions} />
            </Route>
            <Route exact path='/dashboard/leaderboard'>
                <LeaderBoard />
            </Route>
        </Switch>

    </div> : <Redirect to='/'></Redirect>
}

function mapStateToProps({ users, authedUser, questions }) {
    return {
        usersIds: Object.keys(users),
        users,
        questions,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)