import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { Redirect } from 'react-router';

const Login = (props) => {
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
      {submitted && <Redirect to="/dashboard" />}
    </form> : null
}

function mapStateToProps(users) {
  return {
    ...users
  }
}

export default connect(mapStateToProps)(Login)