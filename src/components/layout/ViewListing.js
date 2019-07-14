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

                <div className="ui segments">
                <div className="ui segment">
                    <h3><i className="ui icon dollar sign"></i> Price</h3>
                </div>
                <div className="ui segment">
                    <p>Middle</p>
                </div>
                <div className="ui horizontal segments">
                    <div className="ui segment">
                    <p>Top</p>
                    </div>
                    <div className="ui segment">
                    <p>Middle</p>
                    </div>
                    <div className="ui segment">
                    <p>Bottom</p>
                    </div>
                </div>
                <div className="ui segment">
                    <p>Bottom</p>
                </div>
                </div>   
            </div>
        )
}

export default ViewListing;
