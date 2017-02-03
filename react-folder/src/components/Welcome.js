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
          <Col lg={12}>
            <h6 className="whiteText headline spaceBottomS">a more personal social media</h6>
          </Col>
        </Row>

        <Row>
            <h1 className="uandi text-center">u & i</h1>
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
