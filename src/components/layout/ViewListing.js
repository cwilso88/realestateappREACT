import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import listingsData from '../../data/listingsData';

class ViewListing extends Component { 
    constructor( props ){
        super();
        this.state = { ...props };
      }
        render () {
            return ( 
                <div id="content-area viewListing"> 
                    <div className="ui padded segment">
                         <Link to="/">
                         <div className="ui animated button" tabIndex="0" style={{ margin: "5px 0px 20px 5px", backgroundColor: "#FFFEFF" }}>
                            <div className="visible content" style={{ color: "#FF718E" }}>Back</div>
                                <div className="hidden content">
                                    <i className="left arrow icon" style={{ color: "#FF718E" }}></i>
                            </div>
                        </div>
                         </Link>
                        
    
    
                        <div class="ui segment">
                            <img class="ui centered image" src="https://i.kinja-img.com/gawker-media/image/upload/s--bIV3xkEm--/c_scale,f_auto,fl_progressive,q_80,w_800/jsprifdd1gmfy7e7nola.jpg" alt="house" />
                        </div>
    
                        
                        
                        <div className="ui labeled button" tabIndex="0">
                                <div className="ui button">
                                    <i className="heart icon"></i> Like
                                </div>
                                <a className="ui basic label">
                                    2,048
                                </a>
                                </div>
                                <div className="ui left labeled button" tabindex="0">
                                <a className="ui basic right pointing label">
                                    2,048
                                </a>
                                <div className="ui button">
                                    <i className="heart icon"></i> Views
                                </div>
                                </div>
                                <div className="ui left labeled button" tabindex="0">
                                <a className="ui basic label">
                                    1,048
                                </a>
                            <div className="ui icon button">
                                <i className="fork icon"></i>
                            </div>
                        </div>
                    </div>
    
                    <header style={{ textAlign: "center", textTransform: "uppercase" }}>Listing Details</header>
                    <div className="segments-container" style={{ margin: "50px" }}>
                    <div className="ui segments">
                        <div className="ui horizontal segments">
                            <div className="ui segment">
                                <h3><i className="ui icon dollar sign"></i> Price</h3>
                            </div>
                            <div className="ui segment">
                                <h3><i class="calculator icon"></i>Est.Payment</h3>
                            </div>
                        </div>
                        <div className="ui segment">
                            <h1><i className="home icon"></i>Address :</h1>
                        </div>
                    
                    <div className="ui horizontal segments">
                        <div className="ui segment">
                            <h3><i className="bed icon"></i>Rooms :</h3>
                        </div>
                        <div className="ui segment">
                        <h3><i className="square outline icon"></i>Square Feet :</h3>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="ui segments">
                    <div className="ui segment">
                        <header>Property Features</header>
                    </div>
                    <div className="ui secondary segment">
                    <ul className="ui list">
                        <li>Elevator</li>
                        <li>Fireplace</li>
                        <li>Gym</li>
                        </ul>
                    </div>
                    </div>  
                </div>
                <div className="contact-agent" style={{ margin: "50px" }}>
                    <a target="blank" href="https://www.homelight.com/atlanta-ga/top-real-estate-agents">
                    <div className="ui animated fade button" tabIndex="0" style={{ left: "30%", padding: "20px 60px 20px 60px", textAlign: "center", color: "#FF718E", backgroundColor: "#FFFEFF" }}>
                        <div className="visible content" style={{ padding: "20px 60px 20px 40px", textAlign: "center" }}>Love this home?</div>
                        <div className="hidden content">
                        <i className="envelope outline icon"></i> Email Agent
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default ViewListing;
