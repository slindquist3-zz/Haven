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
    <Row className="form-horizontal left">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            {/* <ControlLabel className="whiteText">Email</ControlLabel> */}
            <FormControl
              className="input-lg"
              placeholder="Email"
              type="text"
              onChange={this.handleEmailChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            {/* <ControlLabel className="whiteText">Password</ControlLabel> */}
            <FormControl
              className="input-lg"
              placeholder="Password"
              type="password"
              onChange={this.handlePasswordChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Row>
            <Button className="buttonOverride btn btn-default btn-lg btn-block" type="submit">Enter</Button>


            </Row>
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
