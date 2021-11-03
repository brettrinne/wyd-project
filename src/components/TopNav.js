import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetAuthedUser } from '../actions/authedUser'

class TopNav extends Component {

    handleResetUser = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(resetAuthedUser())

    }


    render() {

        const { dispatch } = this.props

        return (
            <nav className='nav'>
                <ul>
                    <li key='home'>
                        <NavLink to='/' exact activeclassname='active'>
                            Home
                        </NavLink>
                    </li>
                    <li key='leaderboard'>
                        <NavLink to='/leaderboard' activeclassname='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    {

                        this.props.authedUser.length === 0 ?
                            <li key='login'>
                                <button className='btn-nav'>
                                    <NavLink to='/login' exact activeclassname='active'>
                                        login
                                    </NavLink>
                                </button>
                            </li>
                            :
                            <li key='logout'>
                                <button className='btn-nav' onClick={this.handleResetUser}>
                                    {`Logout as ${this.props.authedUser}`}
                                </button>
                            </li>

                    }

                </ul>
            </nav>
        )

    }
}



function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(TopNav)