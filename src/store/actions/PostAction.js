import * as actionType from '../actions';
export const createPost = (post) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to datebase
        const fireStore = getFirestore();
        try {
            await fireStore.collection('posts').add({
                ...post,
                AfName: "Mohammed",
                AlName: "Attieah",
                AuthId: "123",
                createdAt: new Date()
            });
        } catch (err) {
            dispatch({ type: actionType.CREATE_POST_ERROR, err })
        }
        dispatch({ type: actionType.ADD_POST, post });
    }
}