import * as constant from '../constants/Constants';

/**
 * Setting up all default data and params for this reducer
 */
const initialState = {
    houses: false,
    selectedHouseId: false,
    selectedHouseResidents: false
};

/**
 * @Reducer model
 * main reducer which storing all data, params and evolve it in case of changing state
 */
export default function model(state = initialState, action) {
    switch (action.type) {

        case constant.GET_DATA_SUCCESS:
            return {
                ...state,
                houses: action.payload
            };

        case constant.SELECT_HOUSE:
            return {
                ...state,
                selectedHouseId: action.payload,
                selectedHouseResidents: state.houses.find(item => item.id === action.payload).people
            };

        case constant.EDIT_HOUSES_MODEL:
            return {
                ...state,
                houses: action.payload
            };

        case '@@router/LOCATION_CHANGE':
            return selectStateByLocation(state, action);

        default:
            return state;
    }
}

/**
 * @function selectStateByLocation
 * function which take data from router and update app by it
 */
function selectStateByLocation(state) {
    return state;
}
