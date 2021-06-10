export const initialState = {
    User : null,
    Playlist : [],
    Playing : false,
    item :null,
    // remove after complete down one 
    token: "BQCSNQSmPB1BCE1fq9Y9R-B7lziDvFNjUr1jAXa_WVguGGHIp9UhYy6ltZh7SeALbqDw-C_1O2Po3n4IzI6e6ESly7rLPhmJx58GNxyyuCYAYyRcAhKQvgE3TPWqUVwHo8sAdU28j7CJDdHRjrMlndUjyavrAECFunLwWzAKZ0MY5_5v"
};

export const reducer =(state,action)=>{
     console.log(action);
    switch (action.type) {
        case "SET_USER":
            return{
                    ...state,
                    user: action.user,
            };

            case "SET_TOKEN":
                return{
                        ...state,
                        token: action.token,
                };
         
    
        default:
            return state;
    }
};