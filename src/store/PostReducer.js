const initalState = {
    post: [
        { id: "1", title: "Help me find peach", content: "blah blah blah blah blah" },
        { id: "2", title: "Collect all the stars", content: "blah blah blah blah blah" },
        { id: "3", title: "egg hunt with Temoo", content: "blah blah blah blah blah" }
    ]
}
const PostReducer = (state = initalState, action) => {
    return state;
}

export default PostReducer;