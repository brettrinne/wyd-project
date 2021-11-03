import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {
    handleSelect = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        if (e.target.value.length > 0) {
            dispatch(setAuthedUser(e.target.value))
            this.props.history.push(`/`)


        }
    }
    render() {
        const ulist = Object.keys(this.props.users)
        ulist.unshift('')
        return (

            < div className="w3-card">
                <div>
                    <h3>Select User To Login</h3>
                    <select onChange={this.handleSelect}>
                        {
                            ulist.map((e) => {
                                return <option key={e} >{e}</option>
                            })

                        }
                    </select>
                </div>
            </div >


        )

    }
}



function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)