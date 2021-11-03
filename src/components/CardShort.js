import React, { Component } from 'react'

class CardShort extends Component {
    render() {
        const { questionList } = this.props
        return (

            <div className='textarea'>
                {console.log(this.props.questionList)}
                <div>
                    {this.props.questionList.map((e) => {
                        return <div className='container'>
                            <p className='textarea' key={e.author}>{`${e.author} asks would you rather...`}</p>
                            <div className='tweet'>
                                <p className='textarea' key={e.optionOne.text}>{e.optionOne.text}</p>
                                <p> or </p>
                                <p className='textarea' key={e.optionTwo.text}>{e.optionTwo.text}</p>
                            </div>
                            <button className='btnpoll'>Poll Results</button>
                        </div>
                    })}


                </div>
            </div >



        )
    }
}


export default CardShort