import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import logUserIn from '../actions/logUserIn'
import Login from './Login'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {email: "", password: ""}
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.logUserIn(this.state)
  }

  handleSignUp(event){
    browserHistory.push('/signup')
  }
  render(){
    return(
      <div>
        <Row>
            <p className="logo text-center fade">Haven</p>
        </Row>
        <Row>
          <Col className="col-md-8 col-md-offset-2">
          </Col>
        </Row>
          <Login />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logUserIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(Welcome)
