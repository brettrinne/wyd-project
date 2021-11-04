import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerQuestions } from '../actions/questions'
import { answerQuestionsUsers } from '../actions/users'
import { ProgressBar, Badge } from 'react-bootstrap'
class Poll extends Component {

    handleVote = (e, qid, authedUser) => {
        e.preventDefault()
        const answer = document.getElementsByName('options')[0].checked ? 'optionOne' : 'optionTwo'
        this.props.dispatch(answerQuestions({
            authedUser,
            qid,
            answer
        }))
        this.props.dispatch(answerQuestionsUsers({
            authedUser,
            qid,
            answer
        }))
    }


    render() {
        const { questions, users, authedUser, history } = this.props
        const id = history.location.pathname.split("/").pop()
        const currUser = users[authedUser]
        const userAnsw = Object.keys(currUser.answers)
        return (

            <div>
                {
                    userAnsw.includes(id) ?
                        <div>
                            {console.log(questions[id].optionOne.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length) * 100)}
                            <div className='container'>
                                <div className='textarea'>
                                    {currUser.answers[id] === 'optionOne' ? <Badge bg="secondary">Voted</Badge> : null}

                                    <p>{questions[id].optionOne.text}</p>
                                    <p >
                                        {`Votes: ${questions[id].optionOne.votes.length}`}
                                    </p>
                                    <ProgressBar now={(questions[id].optionOne.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100} label={`${(questions[id].optionOne.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100}%`} ></ProgressBar>
                                </div>
                                <div className='textarea'>
                                    {currUser.answers[id] === 'optionTwo' ? <Badge bg="secondary">Voted</Badge> : null}
                                    <p>{questions[id].optionTwo.text}</p>
                                    <p >
                                        {`Votes: ${questions[id].optionTwo.votes.length}`}
                                    </p>
                                    <ProgressBar now={(questions[id].optionTwo.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100} label={`${(questions[id].optionTwo.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100}%`} ></ProgressBar>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className='container'>
                                <h3 className='center'>Would You Rather...</h3>
                                <div className='textarea'>
                                    <p>{questions[id].optionOne.text}</p>
                                    <input defaultChecked name='options' type='radio' value='optionOne' id='1'></input>
                                </div>
                                <div className='textarea'>
                                    <p>{questions[id].optionTwo.text}</p>
                                    <input name='options' type='radio' value='optionTwo' id='2'></input>
                                </div>
                            </div>
                            <button className='btnpoll' onClick={(e) => this.handleVote(e, id, this.props.authedUser)}>Vote</button>
                        </div>



                }



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

export default connect(mapStateToProps)(Poll)