import * as actionType from '../actions';

export const signIn = (userInfo) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        let isLogin;
        try {
            isLogin = await firebase.auth().signInWithEmailAndPassword(
                userInfo.email,
                userInfo.password
            )
        } catch (err) {
            //console.log(err)
            dispatch({ type: actionType.SIGNIN_ERROR })
        }
        if (isLogin) {
            dispatch({ type: actionType.SIGNIN })
        }

    }
}

export const sigOut = () => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        try {
            await firebase.auth().signOut()
        } catch (err) {
            dispatch({ type: actionType.SIGNOUT_ERROR })
        }
        dispatch({ type: actionType.SIGNOUT })
    }
}