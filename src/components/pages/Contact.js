import React, { Component } from 'react';

class Login extends Component {
    
    render() {
        return (
            <div className="ui middle aligned center aligned grid content-area" id="contact" style={{ backgroundColor: "#dadde2" }}>
                <div className="ui container">			
			        <form className="ui form pad-top-30 pad-bottom-30" style={{ margin: "10%" }}>
			            <h3 className="huge header inverted">Contact Us</h3>
                        <div className="two fields">
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name" />
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input type="text" name="last-name" placeholder="Last Name" />
                            </div>
				        </div>
                        <div className="field">
                            <label>Leave your message here:</label>
                            <textarea></textarea>
                        </div>
                        <div class="field">
                            <label>Message Type:</label>
                            <div className="ui selection dropdown">
                                <input type="hidden" name="message-type" />
                                <i className="dropdown icon"></i>
                                <div className="default text">Message Type</div>
                                <div className="menu">
                                    <div className="item" data-value="1">Complaint</div>
                                    <div className="item" data-value="0">Query</div>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
			        <div className="ui submit button">Submit</div>
			    </form>
		    </div>
        </div>
        )
    }
}

export default Login;
