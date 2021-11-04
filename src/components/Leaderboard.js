import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render() {
        return (

            <div>
                <h4 className='center'>Leaderboard</h4>

                {
                    this.props.userIds.map((e) => {
                        return <div key={`mdiv-${e}`} className='tweet'>
                            <h3 key={this.props.users[e].name} className='tweet'>{this.props.users[e].name}</h3>
                            <p key={`q-${e}`} className='textarea'>{`Questions: ${Object.values(this.props.users[e].questions).length}`}</p>
                            <p key={`a-${e}`} className='textarea'>{`Answers: ${Object.values(this.props.users[e].answers).length}`}</p>
                            <h3 key={`total-${e}`} className='tweet-info'>{`Total: ${Object.values(this.props.users[e].questions).length + Object.values(this.props.users[e].answers).length}`}</h3>
                        </div>
                    })




                }


            </div >



        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
            .sort((a, b) => (Object.values(users[b].questions).length + Object.values(users[b].answers).length) - (Object.values(users[a].questions).length + Object.values(users[a].answers).length))
        , users
    }
}

export default connect(mapStateToProps)(Leaderboard)