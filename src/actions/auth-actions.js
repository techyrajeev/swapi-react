import Api                   from '../utils/api';
import jwtDecode             from 'jwt-decode';
import { SET_CURRENT_USER }  from './action-types';

export function setCurrentUser(user) {
    return {
        type : SET_CURRENT_USER,
        user
    };
}

export function logOut() {
    return dispatch => {
        return Promise.resolve().then(() => {
            localStorage.removeItem('sessionToken');
            localStorage.removeItem('userName');
            dispatch(setCurrentUser({}));
        });
    }
}

export function login(data) {
    return dispatch => {
        return Api.login(data)
            .then( res => {
                const token = res.token;
                localStorage.setItem('sessionToken', token);
                localStorage.setItem('userName', data.username);
                dispatch(setCurrentUser(jwtDecode(token)));
            });
    }
}
