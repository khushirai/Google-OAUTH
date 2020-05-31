import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
// redux to work with react, we use react redux
import {connect} from 'react-redux';
// takes all the different action creator and assign to actions object
import * as actions from '../actions'
import { Landing } from "./Landing";


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
    // App component calls an Action creator
    componentDidMount(){
        this.props.fetchUser(); 
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route exact path="/surveys/new" component={SurveyNew} />
                </BrowserRouter>
            </div>
        );
    }
}


export default connect(null, actions)(App);