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
                    <button className="ui button">
                        <i className="icon camera"></i>
                        Click to expand photo
                    </button>
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
                    <p>Top</p>
                </div>
                <div className="ui secondary segment">
                    <p>Secondary Content</p>
                </div>
                </div>  
            </div>
        </div>
    )
}

export default ViewListing;
