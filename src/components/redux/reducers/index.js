import {
    ADD_RESULT,
    DELETE_RESULT
} from './../actionTypes';

const currentResult = function (state = {}, action) {
    // if (action.type === ADD_RESULT) {
    //     return [
    //         ...state,
    //         {
    //             resultId: action.text
    //         }
    //     ];
    // } else {
    //     return state
    // }
    switch (action.type) {
        case ADD_RESULT: {
            return {resultId : action.text}
        }
        case DELETE_RESULT: {
            return {resultId : ''};
        }
        default:
            return state
    }
};

export default currentResult;