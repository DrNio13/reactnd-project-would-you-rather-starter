import React, { useEffect } from 'react'
import {
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import { connect } from 'react-redux';
import { Menu } from '../Menu';
import Question from '../../components/Question';
import NewQuestion from '../NewQuestion';
import { Home } from '../Home';
import LeaderBoard from '../LeaderBoard';
import { handleQuestionsInitialData } from '../../actions/questions';

const Dashboard = (props) => {
    let location = useLocation();

    useEffect(() => {
        props.dispatch(handleQuestionsInitialData())
    }, []); // eslint-disable-line

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
                <Question />
            </Route>
            <Route exact path='/dashboard/leaderboard'>
                <LeaderBoard />
            </Route>
        </Switch>

    </div> : <Redirect to={`/#${location.pathname}`} />
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