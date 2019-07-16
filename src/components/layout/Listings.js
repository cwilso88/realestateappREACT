import React, {Component} from 'react';
import { Link } from 'react-router-dom';



export default class Listings extends Component {
    constructor() {
        super()
        this.state = {
            name: 'chasity'
        }
        this.loopListings = this.loopListings.bind(this)
    }
    loopListings () {
        var {listingsData} = this.props

        if(listingsData === undefined || listingsData.length === 0) {
            return "Sorry your filter did not match any listing."
        }

        return listingsData.map((listing, index) => {
            if(this.props.globalState.view === 'box') {

                //THIS IS THE BOX VIEW  
                return ( <div className="col-md-3" key={index}>
                <div className="listing">
                    <div className="listing-img" style={{ background: `url("${listing.image}") no-repeat center center`}}>
                        <span className="address">{listing.address}</span>
    
                     <div className="details">
    
                        <div className="col-md-3">
                                <div className="user-img"></div>
                        </div>
    
                        <div className="col-md-9">
                                <div className="user-details">
                                    <span className="user-name">Nina Simone</span>
                                    <span className="post-date">07/31/2018</span>
                                </div>
                                <div className="listing-details">
                                    <div className="floor-space">
                                        <i className="square outline icon"></i>
                                        <span>{listing.floorSpace} ft&sup2;</span>
                                    </div>
                                    <div className="bedrooms">
                                        <i className="bed icon"></i>
                                        <span>{listing.rooms} bedrooms</span>
                                    </div>
                                </div>
                            
                            <div className="view-btn-container">
                                <Link to={`/listing/${listing.id}`} className="view-btn">View Listing</Link>
                            </div>
                        </div>
                        
                        </div>
                     </div>
    
                    <div className="bottom-info">
                        <span className="price">{listing.price}</span>
                        <span className="location"><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state}</span>
                    </div>
                 </div>
             </div>)

                //End of if statement
            }  else {

                //THIS IS THE LONG VIEW 
                return ( <div className="col-md-12 col-lg-6" key={index}>
                <div className="listing">
                    <div className="listing-img" style={{ background: `url("${listing.image}") no-repeat center center`}}>
                        <span className="address">{listing.address}</span>
    
                     <div className="details">
    
                        <div className="col-md-3">
                                <div className="user-img"></div>
                        </div>
    
                        <div className="col-md-9">
                                <div className="user-details">
                                    <span className="user-name">Nina Simone</span>
                                    <span className="post-date">07/31/2018</span>
                                </div>
                                <div className="listing-details">
                                    <div className="floor-space">
                                        <i className="square outline icon"></i>
                                        <span>{listing.floorSpace} ft&sup2;</span>
                                    </div>
                                    <div className="bedrooms">
                                        <i className="bed icon"></i>
                                        <span>{listing.rooms} bedrooms</span>
                                    </div>
                                </div>
                            
                                <div className="view-btn-container">
                                    <Link to={`/listing/${listing.index}`} className="view-btn">View Listing</Link>
                                </div>
    
                        </div>
                        
                        </div>
                     </div>
    
                    <div className="bottom-info">
                        <span className="price">{listing.price}</span>
                        <span className="location"><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state}</span>
                    </div>
                 </div>
             </div>)

            }

           //End of if and else statement for  both views
            
        })
    }
    render () {
        return (<section id="listings">
        <section className="search-area">
            <input type="text" name="search" onChange={this.props.change} />
        </section>

        <section className="sortby-area">
            <div className="results">{this.props.globalState.filteredData.length} results found</div>
            <div className="sort-options">
                <select name="sortby" className="sortby" onChange={this.props.change}>
                    <option value="price-asc">Lowest Price</option>
                    <option value="price-asc">Highest Price</option>
                </select>

            <div className="view">
                <i className="list icon" onClick={this.props.changeView.bind(null, "long")}></i>
                <i className="th icon" onClick={this.props.changeView.bind(null, "box")}></i>
            </div>
            
            </div>
        </section>

        <section className="listings-results">
            {this.loopListings()}
        </section>

        <section id="pagination">
            <ul className="pages">
                <li>Prev</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
            </ul>
        </section>

        </section>)
    }
}
