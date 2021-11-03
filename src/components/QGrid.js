import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import CardShort from './CardShort'

class QGrid extends Component {
    render() {
        const { questions, users, authedUser } = this.props
        const currUser = users[authedUser]
        const userAnsw = Object.keys(currUser.answers)
        const answQuestions = Object.values(questions).filter((e) => { return userAnsw.includes(e.id) })
        const unanswQuestions = Object.values(questions).filter((e) => { return !userAnsw.includes(e.id) })
        return (

            <div>
                <h4 className='center'>Qgrid</h4>
                <div className='textleft'>
                    <div className='center'>Answered</div>

                    <CardShort questionList={answQuestions} />

                </div>
                <div className='textright'>
                    <div className='center'>Unanswered</div>
                    <CardShort questionList={unanswQuestions} />
                </div>
            </div >



        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QGrid)