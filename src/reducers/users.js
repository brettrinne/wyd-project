import { RECEIVE_USERS, SAVE_QUESTION_ANSWER } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}