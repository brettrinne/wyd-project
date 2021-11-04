import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitQuestions } from '../actions/questions'
class NewQuestion extends Component {

    handleSubmit = (e, authedUser) => {
        e.preventDefault();
        const op1 = document.getElementById('optionOne').value;
        const op2 = document.getElementById('optionTwo').value;
        this.props.dispatch(submitQuestions({
            authedUser,
            optionOne: op1,
            optionTwo: op2
        }))
    }

    render() {
        return (
            < div className='container'>
                <h3>Would you Rather...</h3>
                <div className='textarea'>
                    <input type='text' id='optionOne' size='64' required={true}></input>
                    <p> or </p>
                    <input type='text' id='optionTwo' size='64' required={true}></input>
                    <button className='btnpoll' onClick={(e) => this.handleSubmit(e, this.props.authedUser)}>Submit</button>
                </div>
            </div >



        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)