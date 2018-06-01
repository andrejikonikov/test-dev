import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

    render() {

        return (

            <footer className="foter">
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">menu link</a>
                            </li>
                            <li>
                                <a href="#">menu link</a>
                            </li>
                            <li>
                                <a href="#">menu link</a>
                            </li>
                            <li>
                                <a href="#">menu link</a>
                            </li>
                            <li>
                                <a href="#">menu link</a>
                            </li>
                            <li>
                                <a href="#">menu link</a>
                            </li>
                        </ul>
                    </nav>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="foter__title">
                        <h2>The Site</h2>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;
