import { SET_USERS } from '../actions/users'
import { ADD_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question)
                }
            }
        default:
            return state
    }
}