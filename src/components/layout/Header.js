import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo225px.png'
//import GoogleAuth from '../../auth/GoogleAuth';


class Header extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Chasity'
        }
    }
    render () {
       // const imgLink = "https://cdn3.iconfinder.com/data/icons/gradient-circle/36/2055-512.png";
        return (
            <header>
                <div className="logo">
                   <img src={ logo } alt=""/> 
                </div>
                    <nav>
                        <Link to="/">Buy</Link>
                        <Link to="/advertise" >Advertise</Link>
                        <Link to="/about" >About Us</Link>
                        <Link to="/contact" >Contact</Link>
                    </nav>
            </header>
        )
    }
}

export default Header;

