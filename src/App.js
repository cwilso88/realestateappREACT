import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RealEstate from './components/layout/RealEstate';
import Header from './components/layout/Header';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Advertise from './components/pages/Advertise';
import ViewListing from './components/layout/ViewListing';


import './sass/main.scss';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                                <Route exact path="/" component={RealEstate}></Route>
                                <Route exact path="/contact" component={Contact}></Route>
                                <Route exact path="/about" component={AboutUs}></Route>
                                <Route exact path="/advertise" component={Advertise}></Route>
                                <Route exact path="/listing/:id" component={ViewListing}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;


