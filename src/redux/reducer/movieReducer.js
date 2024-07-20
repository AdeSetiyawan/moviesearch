const defaultState ={
    values:[],
    detail:{},
}

export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIES_SEARCH  = 'GET_MOVIES_SEARCH';

const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_MOVIE:
          return {
            ...state,
            values: action.payload
          }
        case GET_MOVIES_SEARCH:
          return {
            ...state,
            values: action.payload
          }

        default:
          return state;
      }
}

export default movieReducer;