import React, { Component } from 'react';
import logo from './../../logo.svg';

import './App.css';
import './Layout.css';

import Header from './../header/Header';
import CustomForm from './../form/Form';
import Footer from './../footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <div className="container layout">
                    <section className="layout__column layout__column--twoHrirds">
                        <article>
                            <h2>Aenean ac diam  nec neque fringilla</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autem.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autem.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autem.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute .</p>
                        </article>

                        <div className="layout__column layout__column--half">
                            <article className="restricted">
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </article>
                        </div>

                        <div className="layout__column layout__column--half">
                            <article className="restricted">
                                <h3>Aenean ac diam  nec neque fringilla</h3>

                                <ul>
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">sit amet, consectetur</a></li>
                                    <li><a href="#">adipisicing elit</a></li>
                                </ul>
                            </article>
                        </div>
                    </section>

                    <aside className="layout__column layout__column--thirdReduced">
                        <article>
                            <h3>Aenean ac diam  nec neque fringilla</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </article>

                        <CustomForm />
                    </aside>
                </div>

                <section className="container layout highlights">
                    <div className="layout__column layout__column--third">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div className="layout__column layout__column--third">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div className="layout__column layout__column--third">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default App;
