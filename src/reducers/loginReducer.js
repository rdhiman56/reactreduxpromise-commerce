import { LOGIN } from '../constants';

export default (state=[], action) => {
    switch(action.type) {
        case LOGIN:
            return [action.payload, ...state];

        default:
            return state;
    }
};