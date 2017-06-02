import * as constants from '../constants/Constants';
import * as housesData from '../data/housesData.json';

/**
 *Action for get data about houses
 */
export function getData() {
    return (dispatch) => {
        dispatch({
            type: constants.GET_DATA_SUCCESS,
            payload: housesData.houses
        });
    };
}

/**
 *Action for select house
 * @param selectedHouseId - selected house id
 */
export function selectHouse(selectedHouseId) {
    return (dispatch) => {
        dispatch({
            type: constants.SELECT_HOUSE,
            payload: selectedHouseId
        });
    };
}

/**
 *Action for update model for houses
 * @param newHousesModel - new model for houses
 */
export function editHousesModel(newHousesModel) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_HOUSES_MODEL,
            payload: newHousesModel
        });
    };
}