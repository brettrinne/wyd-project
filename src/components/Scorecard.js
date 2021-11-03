import React, { Component } from 'react'
import { connect } from 'react-redux'

class Scorecard extends Component {
    render() {
        return (
            <div>
                <ul className='dashboard-list'>
                    {

                        // TODO: Create question card

                        Object.values(this.props.questions).map((e) => {
                            return <p>{JSON.stringify(e)}</p>
                        })

                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Scorecard)