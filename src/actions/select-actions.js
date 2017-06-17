import Api                        from '../utils/api';
import { UPDATE_SELECTED_RESULT, TOGGLE_SUGGESTIONS }  from './action-types';

export function updateSelectedResult(selectedPlanet) {
    return {
        type : UPDATE_SELECTED_RESULT,
        selectedPlanet
    };
}

export function updateSuggestionsDisplay() {
    return {
        type : TOGGLE_SUGGESTIONS,
        showSuggestions : false
    };
}

export function select(selectedPlanet) {
    return dispatch => {
        dispatch(updateSuggestionsDisplay());
        dispatch(updateSelectedResult(selectedPlanet));
    };
}
