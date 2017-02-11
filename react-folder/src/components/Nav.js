import React, {Component} from 'react'
// import { bindActionCreators } from 'redux'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import '../../public/media/welcome-1.jpg'

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
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse">
                    <span>Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav center">
                    <li><a href="/">Home</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/profile">Your Profile</a></li>
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
