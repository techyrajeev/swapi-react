import * as types from '../actions/action-types';

const initialState = { selectedPlanets : [], showSuggestions : false };

function checkAvailability(planets, planet) {
    return planets.some(oldPlanet => planet.name === oldPlanet.name);
}

function getNewSelectedState(planets, planet) {

    if(!checkAvailability(planets, planet)) {
        return [...planets, planet]
    } else {
        return planets;
    }
}

function select(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SELECTED_RESULT:
      return {
          ...state,
          selectedPlanets : getNewSelectedState(state.selectedPlanets, action.selectedPlanet)
      };

    case types.TOGGLE_SUGGESTIONS:
      return {
          ...state,
          showSuggestions : action.showSuggestions
      };

    default:
      return state;
    }
}

export default select;
