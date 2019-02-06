import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <Router>
                    <div class="navbar-collapse" id="navbar">

                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active"><Link to="/">
                                <a class="nav-link">Tracker </a>
                            </Link></li>
                            <li class="nav-item"><Link to="/">
                                <a class="nav-link">Dashboard</a>
                            </Link></li>
                            <li class="nav-item"><Link to="/">
                                <a class="nav-link">Trainers</a>
                            </Link></li>
                        </ul>

                        <Route path = "/"></Route>
                        <Route path = "/"></Route>
                        <Route path = "/"></Route>

                    </div>
                </Router>
            </nav>
        );
    }
}

export default Navbar