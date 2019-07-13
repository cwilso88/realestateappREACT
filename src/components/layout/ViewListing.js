import React, { Component } from 'react'

class ViewListing extends Component {
    componentDidMount() {
        //const id = {props.match.params};
    }
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
