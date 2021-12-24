import { combineReducers } from 'redux';
import profile from './profile';
import Home from './home';

const rootReducer = combineReducers({
    profileState: profile,
    homeState: Home
});

export default rootReducer;