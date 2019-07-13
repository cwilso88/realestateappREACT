import React, { Component } from 'react'

class ViewListing extends Component {
    componentDidMount() {
        //const id = {props.match.params};
    }
    render() {
        const { listingsData } = this.props;

        console.log(listingData);
        return (
            <div>
                ViewListing
                {listing.id}
            </div>
        )
    }
}

export default ViewListing;
