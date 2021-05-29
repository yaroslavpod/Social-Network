import profileReducer, {addPost, deletePost} from "./profile-reducer";

let initialState = {
    postsData: [
        {id: 1, message: "hello", likesCount: 34},
        {id: 2, message: "My name is Hotteoi", likesCount: 11},
        {id: 3, message: "Jo", likesCount: 20},
        {id: 4, message: "It's so rainy today", likesCount: 111},
        {id: 4, message: "I LOVE Katya", likesCount: 11111},
    ],
}


test('postsData should be incremented for 1', () => {
    //1test data
    //2 action
    let action = addPost("new text");
    let newState = profileReducer(initialState,action);
    //expectation
    expect(newState.postsData.length).toBe(6);
});


test('message text should be correct', () => {
    let action = addPost("new text");
    let newState = profileReducer(initialState,action);
    expect(newState.postsData[5].message).toBe("new text");
});

test('length after deleting postsdata should be decremented', () => {
    //1test data
    //2 action
    let action = deletePost(1);
    let newState = profileReducer(initialState,action);
    //expectation
    expect(newState.postsData.length).toBe(4);
});
test(`length after deleting shouldn't be decremented if incorrect id`, () => {
    //1test data
    //2 action
    let action = deletePost(1000);
    let newState = profileReducer(initialState,action);
    //expectation
    expect(newState.postsData.length).toBe(5);
});