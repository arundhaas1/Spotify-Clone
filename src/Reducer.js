export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item :null,
    spotify :null,
    discover_weekly:null,
    top_artists:null,

    // remove after complete down one 

    // token: "BQCSNQSmPB1BCE1fq9Y9R-B7lziDvFNjUr1jAXa_WVguGGHIp9UhYy6ltZh7SeALbqDw-C_1O2Po3n4IzI6e6ESly7rLPhmJx58GNxyyuCYAYyRcAhKQvgE3TPWqUVwHo8sAdU28j7CJDdHRjrMlndUjyavrAECFunLwWzAKZ0MY5_5v"
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
                
            case "ADD_PLAYLISTS":
                return{
                        ...state,
                        playlists: action.playlists,
                };
                
            case "SET_DISCOVER_WEEKLY":
                return{
                    ...state,
                    discover_weekly :action.discover_weekly,
                }

            case "SET_TOP_ARTISTS":
                return{
                    ...state,
                    top_artists: action.top_artists,
                }

            case "SET_SPOTIFY" :
                return{
                    ...state,
                    spotify:action.spotify,
                }

            case "SET_ITEM" :
                return{
                    ...state,
                    item:action.item,
                }

            case "SET_PLAYING":
                return{
                    ...state,
                    playing:action.playing,
                }
         
    
        default:
            return state;
    }
};
