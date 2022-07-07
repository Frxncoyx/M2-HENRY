// export { initialState };
import { fav } from "../reducers";
// Here is your key: 85008f93
const key = '85008f93';
// export default reducer && initialState.moviesFavourites;

export function getMovies(title) {
    console.log('getMovies action called');
    return function(dispatch) {
        return fetch(`https://www.omdbapi.com/?apiKey=${key}&s=${title}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'GET_MOVIES',
                    payload: json.Search
                });
            })
    }
}

export function addFav(payload) {
    return {
        type: 'ADD_FAV',
        payload: payload
    }
}



export function removeMovieFavourite(id) {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`https://www.omdbapi.com/?apiKey=${key}&i=${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'GET_DETAIL', payload: json });
            })
    }
}

export function clearDetail() {
    return {
        type: 'CLEAR_DETAIL',
    }
}