import * as API from '../_DATA'

export const SET_USERS = 'SET_USERS'

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function handleUsersInitialData() {
    return (dispatch) => {
        return API._getUsers().then((users) => {
            dispatch(setUsers(users))
        })
    }
}
