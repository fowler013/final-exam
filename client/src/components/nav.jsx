import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }

    topFunction() {
        document.documentElement.scrollTop = 0,
        document.documentElement.scrollDuration = 10000;
    }

    render() {
        return (
            <React.Fragment>
               // <div className=" fixed-top  mt-0 pt-0 pb-3" >
 <nav className="navbar navbar-light formNav bg-dark">
     <a className="navbar-brand" href="#" className="navbar-brand text-dark">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMTRWlaRMJSMEMZImkiu1maVhM7LmvMJUNuMgPsbdnn8MqeNt" width="50" height="40" className="d-inline-block align-top " alt="" onClick={() => { this.topFunction() }} />
     </a> <Link className="navbar-brand text-dark cardFont" to="/"> My Movies </Link>




    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">



         </div>
    </div>
 </nav>
 </div>
            </React.Fragment>
        )
    }
}

export default Navigation;