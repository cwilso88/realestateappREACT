import React, { Component } from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.props.loc;
  }
  render(){
    return (
        <div class="ui segment">
            <div class="ui active inverted dimmer">
                <div class="ui text loader">Connecting to the best agents....</div>
            </div>
            
            <p>You are now leaving the Luxury Real Estate website. Enjoy your new home!</p>
        </div>
    );
  }
}

export default Redirect;