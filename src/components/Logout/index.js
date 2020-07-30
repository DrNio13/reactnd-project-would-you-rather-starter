import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import {
    Redirect
} from "react-router-dom";

const Logout = (props) => {
    useEffect(() => {
        props.dispatch(setAuthedUser(null));
    }, [props])

    return <Redirect to='/'></Redirect>
}

export default connect()(Logout)