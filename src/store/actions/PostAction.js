import * as actionType from '../actions';
export const createPost = (post) => {
    return (dispatch, getState) => {
        //make async call to datebase
        dispatch({ type: actionType.ADD_POST, post });
    }
}