import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { Redirect, useLocation } from 'react-router-dom';

const Login = (props) => {
  const location = useLocation();
  const [userId, setUserId] = useState();
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (event) => {
    setUserId(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch(setAuthedUser(userId));
    setSubmitted(true)
  }

  console.log(0, location)

  return Object.keys(props.users).length ?
    <form onSubmit={handleSubmit} className='form-group'>
      <h3>Welcome to the Would you rather game!</h3>
      <div>
        <label>
          Sign in with:
      <select value={userId} className='form-control' onChange={handleChange}>
            <option value=''></option>

            {Object.values(props.users).map(user => <option key={user.id} value={user.id}>
              {user.name}</option>)}
          </select>
        </label>
      </div>
      <button disabled={!userId} type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>

      {submitted && <Redirect to={`${location.hash ? location.hash.split('#')[1] : '/dashboard'}`} />}

    </form> : null
}

function mapStateToProps(users) {
  return {
    ...users
  }
}

export default connect(mapStateToProps)(Login)