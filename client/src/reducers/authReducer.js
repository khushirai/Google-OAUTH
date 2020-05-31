// records whether or not the user is logged in

import {FETCH_USER} from '../actions/types'
// by default null, user is not logged in 
export default function(state=null,action){
    switch(action.type){
        case FETCH_USER:
            // action.payload is the user model
            // false if the user is logged out, payload returns " "
            // ' ' || false, returns false
            return action.payload||false;
        default:
            return state;
    }
}
