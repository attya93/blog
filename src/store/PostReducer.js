import * as actionType from './actions';
const initalState = {
    post: [
        { id: "1", title: "Help me find peach", content: "blah blah blah blah blah" },
        { id: "2", title: "Collect all the stars", content: "blah blah blah blah blah" },
        { id: "3", title: "egg hunt with Temoo", content: "blah blah blah blah blah" }
    ]
}
const PostReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionType.ADD_POST:
            console.log("created Post:", action.post);
            return state
        case actionType.CREATE_POST_ERROR:
            console.log("created Post Error:", action.err);
            return state

        default:
            return state;
    }
}

export default PostReducer;