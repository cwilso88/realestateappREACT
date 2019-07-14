import React, { Component } from 'react';
import listingsData from '../../data/listingsData';

const ViewListing = (props) => { 
        const listing = listingsData;
        const id = props.match.params.id;
        const currentListing = listing[id];
        console.log(currentListing);

        return ( 
            <div id="content-area viewListing">

                <div className="ui padded segment">
                    <img className="ui fluid image" alt="house" src="https://i.kinja-img.com/gawker-media/image/upload/s--bIV3xkEm--/c_scale,f_auto,fl_progressive,q_80,w_800/jsprifdd1gmfy7e7nola.jpg"></img>
                    
                    <div className="ui labeled button" tabindex="0">
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
            <div className="contact-agent">
            <div class="ui animated button" tabindex="0">
                <div class="visible content">Next</div>
                <div class="hidden content">
                    <i class="right arrow icon"></i>
                </div>
                </div>
                <div class="ui vertical animated button" tabindex="0">
                <div class="hidden content">Shop</div>
                <div class="visible content">
                    <i class="shop icon"></i>
                </div>
                </div>
                <div class="ui animated fade button" tabindex="0">
                <div class="visible content">Sign-up for a Pro account</div>
                <div class="hidden content">
                    $12.99 a month
                </div>
                </div>
            </div>
        </div>
    )
}

export default ViewListing;
