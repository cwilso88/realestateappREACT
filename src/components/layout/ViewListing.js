import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import listingsData from '../../data/listingsData';

class ViewListing extends Component { 
    constructor( props ){
        super();
        this.state = { ...props, listingsData };
      }

      
        render () {
            const { listingsData } = this.state;
            const index = this.props.match.params.id;
            const listing = listingsData[index];
            console.log(listingsData);
            console.log(this.props.match.params.id);
            console.log(listing);
            
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
                        
    
    
                        <div className="ui segment">
                            <img className="ui centered image" src={listing.image} alt="house" />
                        </div>
    
                        
                        
                        <div className="ui labeled button" tabIndex="0">
                                <div className="ui button">
                                    <i className="heart icon"></i> Like
                                </div>
                                <a className="ui basic label">
                                    2,048
                                </a>
                                </div>
                                <div className="ui left labeled button" tabIndex="0">
                                <a className="ui basic right pointing label">
                                    2,048
                                </a>
                                <div className="ui button">
                                    <i className="heart icon"></i> Views
                                </div>
                                </div>
                                <div className="ui left labeled button" tabIndex="0">
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
                                <h3><i className="ui icon dollar sign"></i>{listing.price}</h3>
                            </div>
                            <div className="ui segment">
                                <h3><i className="calculator icon"></i>Est.Payment : {listing.estPayment}</h3>
                            </div>
                        </div>
                        <div className="ui segment">
                            <h1><i className="home icon"></i>Address : {listing.address}, {listing.city}</h1>
                        </div>
                    
                    <div className="ui horizontal segments">
                        <div className="ui segment">
                            <h3><i className="bed icon"></i>Rooms : {listing.rooms}</h3>
                        </div>
                        <div className="ui segment">
                        <h3><i className="square outline icon"></i>Square Feet : {listing.floorSpace}</h3>
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
                        <li>{listing.more[0]}</li>
                        <li>{listing.more[1]}</li>
                        <li>{listing.more[2]}</li>
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
