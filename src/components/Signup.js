import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import { createUser } from '../actions'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {name: "", email: "", password: ""}
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render(){

    return(
      <div>
        <h1 className="signUpCopy spaceTopSM spaceBottomS"> Create an Account with Haven.</h1>
        <Row className="form-horizontal">
          <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup>
              <FormControl className="center input-lg" type="text" placeholder="What's your name?" onChange={this.handleNameChange.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <FormControl className="center input-lg" type="text" placeholder="Enter your email here." onChange={this.handleEmailChange.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <FormControl className="center input-lg" type="password" placeholder="Pick a strong password." onChange={this.handlePasswordChange.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <Button className="spaceTopS signUpButton btn-default btn-lg btn-block" type="submit">Signup</Button>
            </FormGroup>
          </form>
        </div>
      </Row>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
