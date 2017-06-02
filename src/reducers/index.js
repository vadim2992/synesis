import { combineReducers } from 'redux';
import model from './Reducer';
import {routerReducer} from 'react-router-redux';

/**
 *Method for uniting all reducers in one
 */
export default combineReducers({
    model,
    routing: routerReducer
});