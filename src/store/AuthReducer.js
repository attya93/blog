import * as actionType from './actions';

const initalState = {
    authError: null,

}
const AuthReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionType.SIGNIN:
            console.log("sucess");
            return {
                ...state,
                authError: null
            }
        case actionType.SIGNIN_ERROR:
            console.log("failed");
            return {
                ...state,
                authError: "Sign In Failed"
            };
        case actionType.SIGNOUT:
            console.log("signout sucess");
            return state;
        case actionType.SIGNOUT_ERROR:
            console.log("signout failed");
            return {
                ...state,
                authError: "Sign Out Failed"
            }
        default:
            return state;
    }

}

export default AuthReducer;