import React, { Component } from 'react';
import listingsData from '../../data/listingsData';

const ViewListing = (props) => { 
        const listing = listingsData;
        const id = props.match.params.id;
        const currentListing = listing[id];
        console.log(currentListing);

        return ( 
            <div id="viewListing" className="content-area">
                <div className="ui padded segment">
                    <img className="ui fluid image" alt="house" src="https://i.kinja-img.com/gawker-media/image/upload/s--bIV3xkEm--/c_scale,f_auto,fl_progressive,q_80,w_800/jsprifdd1gmfy7e7nola.jpg"></img>
                    <button class="ui button">
                        <i class="icon camera"></i>
                        Click to expand photo
                    </button>
                </div>
            </div>
        )
}

export default ViewListing;
