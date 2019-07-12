import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Chasity'
        }
    }
    render () {
        const imgLink = "https://cdn3.iconfinder.com/data/icons/gradient-circle/36/2055-512.png";
        return (
            <header>
                <div className="logo">
                   <img src={imgLink} alt=""/> 
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

