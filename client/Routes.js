import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import AccountPage from './components/AccountPage';
import Museum from './components/Museum';
import Map from './components/Map';
import {me} from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/museums/:id" component={ Museum } />
            <Route path="/map" component={ Map } />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route exact path="/login" component={ LogInForm } />
            <Route exact path="/signup" component={ SignUpForm } />
            <Route exact path="/museums/:id" component={ Museum } />
            <Route path="/map" component={ Map } />
          </Switch>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
