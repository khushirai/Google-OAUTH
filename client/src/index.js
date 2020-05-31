// installed materialize css as a npm module and hooked up with webpack
// uses ES2015 approach
import 'materialize-css/dist/css/materialize.min.css'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// middleware that lets you call action creators that return a 
// function instead of an action object
import reduxThunk from 'redux-thunk'

import App  from "./components/App";
import reducers from "./reducers";



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

// console.log('Stripe Key is ',process.env.REACT_APP_STRIPE_KEY)
// console.log('Environment is', process.env.NODE_ENV)

// components of react-dom.render
// root component
// where we are rendering that component


// react-stripe-checkout
// shows a button, that user can click,
// after clicking the checckout form appears
// but it doesnot loads up the form 