import React, { Component } from 'react';

import './Header.css';
import './Dropdown.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            subOpen: false,
            top: 0
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

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.pageY;

        this.setState({
            top: scrollTop
        });
    }

    render() {
        let navClass = this.state.open ? "header__navigation open" : "header__navigation";
        let subNavClass = this.state.subOpen ? "dropdown open" : "dropdown";
        let togglerClass = this.state.top >= 60 ? "header__toggler header__toggler--primary" : "header__toggler";

        return (

            <header className="header header--main">
                <div className="container">
                    <nav className="header__top">
                        <ul>
                            <li><a href="#">menu link</a></li>
                            <li><a href="#">menu link</a></li>
                            <li><a href="#">menu link</a></li>
                        </ul>
                    </nav>

                    <div className="header__bottom">
                        <div className="header__bottom--row">

                            <div className="header__title">
                                <h1>The Site</h1>
                            </div>

                            <nav className={navClass}>
                                <div className="wrapper">
                                <div className={togglerClass} onClick={this.menuToggle}>
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
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
