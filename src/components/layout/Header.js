import React, {Component} from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import image from '../../img/logo.png'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Chasity'
        }
    }
    render () {
        return (
            <header>
                <div className="logo">
                    <img src="../../img/logo.png" alt="luxuryhomes"/>
                </div>
                    <nav>
                        <Link to="/advertise" >Advertise</Link>
                        <Link to="/about" >About Us</Link>
                        <Link to="/login" >Log In</Link>
                        <Link to="/register" className="register-btn">Register</Link>
                    </nav>
            </header>
        )
    }
}

export default Header;

