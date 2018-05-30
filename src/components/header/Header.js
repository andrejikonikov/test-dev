import React, { Component } from 'react';

import './Header.css';
import './Dropdown.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            subOpen: false
        };
    }

    menuToggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    subMenuToggle = () => {
        this.setState(prevState => ({
            subOpen: !prevState.subOpen
        }));
    }

    render() {
        let navClass = this.state.open ? "header__navigation open" : "header__navigation";
        let subNavClass = this.state.subOpen ? "dropdown open" : "dropdown";

        return (
            <header className="header header--main">
                <div className="container">
                    <h1 className="header__title">The Site</h1>

                    <nav className={navClass}>
                        <div className="header__toggler" onClick={this.menuToggle}>
                            <span className="brick"></span>
                        </div>
                        <ul>
                            <li>
                                <a href="#" onClick={this.subMenuToggle}>menu link</a>
                                <ul className={subNavClass}>
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">sit amet, consectetur</a></li>
                                    <li><a href="#">adipisicing elit</a></li>
                                </ul>
                            </li>
                            <li><a href="#">menu link</a></li>
                            <li><a href="#">menu link</a></li>
                            <li><a href="#">menu link</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;