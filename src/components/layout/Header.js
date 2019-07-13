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
                   
                   <h5>LUXURY HOMES</h5>
                </div>
                    <nav>
                        <Link to="/advertise" >Advertise</Link>
                        <Link to="/about" >About Us</Link>
                        <Link to="/contact" >Contact</Link>
                        <Link to="/login" className="register-btn">Log in with Google</Link>
                    </nav>
            </header>
        )
    }
}

export default Header;

