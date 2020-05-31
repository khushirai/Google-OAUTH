import React, { Component } from "react";
import { connect } from "react-redux";
// react router dom, flavour of react router that works inside of the browser
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
    // helper method
    renderContent() {
        console.log(this.props.auth)
        switch(this.props.auth){
            case null:
            return;
            case false:
             return (
                 <li><a href="/auth/google">Login with Google</a></li>
             ); 
                default:
                    return [
                        <li key="1"><Payments /></li>,
                        <li key="3" style={{margin:'0 10px'}}>Credits:{this.props.auth.credits}</li>,
                        <li key="2"><a href="/api/logout">Logout</a></li>];
        }
    }

    render() {
        //  console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                    // if not logged in, return to the home page
                       to={this.props.auth ? '/surveys':'/'} 
                        className="left-brand logo"
                        >
                        Emaily
                        </Link>
                    <ul className="right">
                    {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
