export const initialState = {
    User : null,
    Playlist : [],
    Playing : false,
    item :null
};

export const reducer =(state,action)=>{
     console.log(action)
    switch (action.type) {
        case "ADD_USER":
            return{
                    ...state,
                    user: action.user,
            };
    
        default:
            return state;
    }
};
