import React, { Component } from 'react';
import logo from './../../logo.svg';

import './App.css';

import Header from './../header/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />


                <div className="container">
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>

            </div>
        );
    }

}

export default App;