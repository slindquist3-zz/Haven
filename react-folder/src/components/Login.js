import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import logUserIn from '../actions/logUserIn'

class Login extends Component {

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

  render() {
    return (
    <Row className="form-horizontal">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <ControlLabel className="whiteText">Email</ControlLabel>
            <FormControl
              type="text"
              onChange={this.handleEmailChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel className="whiteText">Password</ControlLabel>
            <FormControl
            type="password"
            onChange={this.handlePasswordChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Button className= "whiteButton" type="submit">Login</Button>
          </FormGroup>
      </form>
    </Row>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logUserIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
