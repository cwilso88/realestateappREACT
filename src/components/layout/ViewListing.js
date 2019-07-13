import React, { Component } from 'react'

class ViewListing extends Component {
    render() {
        const { listing } = this.props;

        console.log(listing);
        return (
            <div>
                ViewListing
            </div>
        )
    }
}

export default ViewListing;
