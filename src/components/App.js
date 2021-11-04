import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import TopNav from '../components/TopNav'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import Login from './Login'
import QGrid from './QGrid'
import Poll from './Poll'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <TopNav />
            {this.props.loading === true
              ? null
              :
              this.props.authedUser.length === 0 ?
                <div>
                  <Route path='/login' component={Login} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                </div>
                :

                <div>
                  <Route path='/' exact component={QGrid} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/login' component={Login} />
                  <Route path='/question/:question_id' component={Poll} />
                </div>}
          </div>
        </Fragment>
      </Router>


    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(App)
