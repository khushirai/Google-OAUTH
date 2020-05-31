import {combineReducers} from 'redux';
import authReducer from "./authReducer";

export default combineReducers({
    // auth is produced by authReducer
    auth:authReducer
});