// Creamos nuestro Reducer
// Vamos al archivo index.js en nuestra carpeta reducers. Como vimos, un reducer es simplemente una funcion que recibe 2 parametros: state y action. Y depende la action que reciba nos devuelve el estado actualizado. Al comienzo del archivo creamos nuestro estado inicial. Lo llamamos initialState:

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};
// let fav = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                moviesLoaded: action.payload
            };
        case 'ADD_FAV':
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
                    // moviesFavourites: [...state.moviesFavourites, action.payload]
            };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
            };

        case 'GET_DETAIL':
            return {
                ...state,
                movieDetail: action.payload
            };
        case 'CLEAR_DETAIL':
            return {
                ...state,
                movieDetail: {}
            };
        default:
            return {...state };

    }
}

export default reducer;
// export { fav };