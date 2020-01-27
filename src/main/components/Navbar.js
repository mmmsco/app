import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from "./Home";
import ImportRecipe from "./ImportRecipe";

export default class Navbar extends React.Component {
    render() {
        return <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={"/"} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/import"} className="nav-link">Import</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2"
                                   type="search"
                                   placeholder="Search"
                                   aria-label="Search">
                            </input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <hr/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/import"} component={ImportRecipe}/>
            </Switch>
        </Router>;
    }
}
