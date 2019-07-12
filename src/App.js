import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RealEstate from './components/layout/RealEstate';
import Header from './components/layout/Header';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import Advertise from './components/pages/Advertise';
import Register from './components/pages/Register';



class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <section id="content-area">
                            <Route exact path="/" component={RealEstate}></Route>
                            <Route exact path="/login" component={Login}></Route>
                            <Route exact path="/about" component={AboutUs}></Route>
                            <Route exact path="/advertise" component={Advertise}></Route>
                            <Route exact path="/register" component={Register}></Route>
                        </section>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;


