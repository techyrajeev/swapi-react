import { SET_CURRENT_USER } from '../actions/action-types';
import { isEmptyObj }       from '../utils/utility';

const initState = {
    isAuthenticated : false,
    user            : {}
};

export default (state = initState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated : !isEmptyObj(action.user),
                user            : action.user
            }
            break;
        default:
            return state;
    }
}

