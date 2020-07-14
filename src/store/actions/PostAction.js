import * as actionType from '../actions';
export const createPost = (post) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to datebase
        const fireStore = getFirestore();
        const profile = getState().fBase.profile;
        const AuthId = getState().fBase.auth.uid;
        try {
            await fireStore.collection('posts').add({
                ...post,
                AfName: profile.fName,
                AlName: profile.lName,
                AuthId,
                createdAt: new Date()
            });
        } catch (err) {
            dispatch({ type: actionType.CREATE_POST_ERROR, err })
        }
        dispatch({ type: actionType.ADD_POST, post });
    }
}