import React, {Component} from 'react'
import logo from '../logo.png';
import logoQuote from '../logoQuote.png';
import '../App.css';
import { Link } from 'react-router';


class Landing extends Component {
  render() {
    return (

      <div className="App">
      <div className="container-fluid" id="root">


      <div className="row nav-bar">

      </div>

      <div className="row components-row">

      <div className="col-md-3">

      </div>

      <div className="col-md-6">
      <img src={logo} className="App-logo" alt="logo" />

      <div>
      <img src={logoQuote} className="App-logo-quote" alt="logo-quote" />
      </div>

      <div>
      <Link to={'/home'}><button className="login">login with google</button></Link>

      </div>
      </div>

      <div className="col-md-3">

      </div>


      </div>

      </div>
      </div>

    )
  }
}

  export default Landing;
