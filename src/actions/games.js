import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const getGames = () => {
        return async(dispatch) => {
    
            try {
                
                const resp = await fetchConToken( 'games' );
                const body = await resp.json();
                console.log(body);
                const games = body.games;
                dispatch( gamesLoaded( games ) );
    
            } catch (error) {
                console.log(error)
            }
    
        }
}

// export const eventStartLoading = () => {
//     return async(dispatch) => {

//         try {
            
//             const resp = await fetchConToken( 'events' );
//             const body = await resp.json();

//             const events = prepareEvents( body.eventos );
//             dispatch( eventLoaded( events ) );

//         } catch (error) {
//             console.log(error)
//         }

//     }
// }

const gamesLoaded = (games) => ({
    type: types.gamesLoaded,
    payload: games
})