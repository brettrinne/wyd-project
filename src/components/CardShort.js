import React, { Component } from 'react'
class CardShort extends Component {

    toParent = (e, question_id, history) => {
        e.preventDefault()
        this.props.history.push(`/question/${question_id}`)
    }

    render() {
        const { questionList, history } = this.props
        return (
            <div className='textarea'>
                <div>
                    {questionList.map((poll) => {
                        return <div key={`main-${poll.id}`} className='container'>
                            <p className='textarea' key={poll.author}>{`${poll.author} asks would you rather...`}</p>
                            <div className='tweet'>
                                <p className='textarea' key={poll.optionOne.text}>{poll.optionOne.text}</p>
                                <p key='or'> or </p>
                                <p className='textarea' key={poll.optionTwo.text}>{poll.optionTwo.text}</p>
                            </div>
                            <button key='btn' className='btnpoll' onClick={(e) => this.toParent(e, poll.id, history)}>
                                View Poll
                            </button>
                        </div>
                    })}


                </div>
            </div >



        )
    }
}

export default CardShort