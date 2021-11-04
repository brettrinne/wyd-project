import { hideLoading, showLoading } from 'react-redux-loading'
import { saveAnswer } from '../utils/api'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function answerQuestionsUsers({ authedUser, qid, answer }) {
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