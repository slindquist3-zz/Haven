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
      <Row >
        <Col lg={3} md={3} sm={3} className="centered">
          <div>
          <h3 className="whiteText">Sign Up</h3>
          <form onSubmit={this.handleSubmit.bind(this)} className="centered">
            <FormGroup>
              <ControlLabel className="whiteText">Name</ControlLabel>
              <FormControl type="text" onChange={this.handleNameChange.bind(this)}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel className="whiteText">Email</ControlLabel>
              <FormControl type="text" onChange={this.handleEmailChange.bind(this)}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel className="whiteText">Password</ControlLabel>
              <FormControl type="password" onChange={this.handlePasswordChange.bind(this)}/>
            </FormGroup>

            <Button type="submit">Signup</Button>
          </form>
        </div>
        </Col>
      </Row>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
