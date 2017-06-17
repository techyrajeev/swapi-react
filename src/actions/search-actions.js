import Api                        from '../utils/api';
import { UPDATE_SEARCH_RESULTS, TOGGLE_SUGGESTIONS }  from './action-types';

export function updateSearchResults(planets) {
    return {
        type : UPDATE_SEARCH_RESULTS,
        planets
    };
}

export function updateSuggestionsDisplay() {
    return {
        type : TOGGLE_SUGGESTIONS,
        showSuggestions : true
    };
}

export function search(searchTerm) {
    return dispatch => {
        return Api.search(searchTerm)
            .then( res => {
                console.log(JSON.stringify(res));
                dispatch(updateSuggestionsDisplay());
                dispatch(updateSearchResults(res.planets));
            });
    };
}
