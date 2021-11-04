import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardShort from './CardShort'
import { Tabs, Tab } from 'react-bootstrap'
class QGrid extends Component {
    render() {
        const { questions, users, authedUser, history } = this.props
        const currUser = users[authedUser]
        const userAnsw = Object.keys(currUser.answers)
        const answQuestions = Object.values(questions).filter((e) => { return userAnsw.includes(e.id) })
        const unanswQuestions = Object.values(questions).filter((e) => { return !userAnsw.includes(e.id) })
        return (
            < div >
                <h4 className='center'>Would you Rather...</h4>
                <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="answered" title="Answered">
                        <CardShort key='answered' questionList={answQuestions} history={history} />
                    </Tab>
                    <Tab eventKey="unanswered" title="Unanswered">
                        <CardShort key='unanswered' questionList={unanswQuestions} history={history} />
                    </Tab>
                </Tabs>
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