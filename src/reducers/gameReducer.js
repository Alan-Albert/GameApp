import { types } from "../types/types";


export const gameReducer = ( state = { }, action ) => {

    switch ( action.type ) {
        case types.gamesLoaded:
            return {
                ...state,
                games: [ ...action.payload ]
            }

        default:
            return state;
    }

}