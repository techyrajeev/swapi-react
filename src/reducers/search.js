import * as types from '../actions/action-types';

const initialState = { planets : []};

function search(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH_RESULTS:
      return {
          ...state,
            planets : action.planets
      };

    default:
      return state;
    }
}

export default search;
