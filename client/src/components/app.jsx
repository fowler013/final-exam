import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//import About from './about';
import Movies from './movies';
import SingleMovie from './single';
import Nav from './nav';



class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    
                    
                    
                    
                   <Nav />
                    <Switch>
                        <Route exact path="/" component = {Movies} />
                        <Route exact path="/:id" component = {SingleMovie} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;