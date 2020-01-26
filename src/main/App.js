import React from 'react';
import '../css/App.css';
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar/>
                </header>

                get cookin'!
            </div>
        );
    }
}

