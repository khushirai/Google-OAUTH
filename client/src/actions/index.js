// action creator
import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken=(token)=> async (dispatch)=>{
    const res=await axios.post("/api/stripe",token);
    // exact same action type to update the user model 
    dispatch({type:FETCH_USER, payload:res.data});
}








//also
// resplace res in payload, no need to create a variable 


// or

// export const fetchUser=()=>{
// return function (dispatch){
// axios.get("/api/current_user");
// .then(res=>dispatch({ type: FETCH_USER, payload: res });)
// }
// }
