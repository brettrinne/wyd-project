import { hideLoading, showLoading } from 'react-redux-loading'
import { saveAnswer, saveQuestion } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestions({ authedUser, qid, answer }) {
    return (dispatch) => {


        dispatch(showLoading())


        return saveAnswer({
            authedUser,
            qid,
            answer
        }).then(({ users, questions }) =>
            dispatch({
                type: SAVE_QUESTION_ANSWER,
                users,
                questions
            }))
            .then(() => { dispatch(hideLoading()) })
    }
}

export function submitQuestions({ authedUser, optionOne, optionTwo }) {
    return (dispatch) => {

        dispatch(showLoading())

        return saveQuestion({
            author: authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }).then((questions) =>
            dispatch({
                type: SAVE_QUESTION,
                questions
            }))
            .then(() => { dispatch(hideLoading()) })
    }
}
