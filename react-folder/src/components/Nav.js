import React, {Component} from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Nav extends Component {

  navList(){
    if (this.props.currentUser.loggedIn === true) {
      return [{name: "Home", URI:"/"}, {name: "Profile", URI: "profile"}, {name: "Log Out", URI: "logout"}]
    } else {
      return [{name: "Home", URI: "/"}, {name:"Signup", URI:"signup"}]
    }
  }

  render(){
    let formattedLinks = this.navList().map((item)=>{
      return <li role="presentation"><Link to={item.URI} className="whiteText"> {item.name}</Link></li>
    })
    return(
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav center">
                    <li><a className="Roboto" href="/">HOME</a></li>
                    <li><a className="Roboto" href="/signup">SIGN UP</a></li>
                    <li><a className="Roboto" href="/profile">PROFILE</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          )
        }
      }


function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Nav)
