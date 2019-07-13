import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
                <div className="ui middle aligned center aligned grid content-area" style={{ backgroundColor: "#dadde2"}}>
                    <div className="column" style={{ padding: "15% 30%" }}>
                        <h2 className="ui teal image header">
                            <i className="home icon" style={{ color: "#FF718E" }}/>
                        <div className="content" style={{ color: "#0C002B" }}>
                            Log-in to your account
                        </div>
                        </h2>
                        <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail address" />
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                            </div>
                            <div className="ui fluid large teal submit button" style={{backgroundColor: "#0C002B"}}>Login</div>
                        </div>
                        <div className="ui error message"></div>
                        </form>
                        <div className="ui message">
                        New to us? <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Login;
