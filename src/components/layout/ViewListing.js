import React, { Component } from 'react';
import listingsData from '../../data/listingsData';

class ViewListing extends Component {
    state = {
        listingsData
    }
    
    render() {
        var listingsData = this.state.listingsData;
        console.log(listingsData);
        
        return (
            <div>
                ViewListing
                
            </div>
        )
    }
}

export default ViewListing;
