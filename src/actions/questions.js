import * as API from '../_DATA'
import { setUsers } from './users';

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function setQuestions(questions) {
    return {
        type: SET_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleQuestionsInitialData() {
    return (dispatch) => {
        return API._getQuestions().then((questions) => {
            dispatch(setQuestions(questions))
        })
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        return API._saveQuestion(question).then(question => {
            dispatch(addQuestion(question))
        })
    }
}

export function handleSaveQuestionAnswer(questionAnswer) {
    return (dispatch) => {
        return API._saveQuestionAnswer(questionAnswer).then(({ users, questions }) => {
            dispatch(setQuestions(questions))
            dispatch(setUsers(users))
        })
    }
}