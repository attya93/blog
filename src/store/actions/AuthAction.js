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

export const signUp = (userData) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        let user;
        try {
            user = await firebase.auth().createUserWithEmailAndPassword(
                userData.email,
                userData.password
            );
            return await firestore.collection('users').doc(user.user.uid).set({
                fName: userData.fName,
                lName: userData.lName,
                initial: userData.fName[0] + userData.lName[0]
            });
        } catch (Err) {
            dispatch({ type: actionType.SIGNUP_ERROR, Err })
        }
        dispatch({ type: actionType.SIGNUP })
    }
}