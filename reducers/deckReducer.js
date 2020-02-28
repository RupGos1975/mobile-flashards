import {LOAD_DECKS,RECEIVED_SUCCESSFULL_DECKS} from '../actions/deckActions'
import {getDecks,getDeck} from '../utils/helpers'

const INITIAL_STATE = { 
    deckList: {decks: [], error:null, loading: false, updated:false}
};

/**
 * @description 
 * @param {*} state 
 * @param {*} action 
 */
export const deckReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case RECEIVED_SUCCESSFULL_DECKS:
            return {
                ...state,
                deckList: {decks: Object.keys(action.payload).map((deck) => action.payload[deck]), error:null, loading: false, updated:true}
            }
        default:
            return state
    }
} 