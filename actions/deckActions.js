import {getAllDecks,saveDeck,addCardToSpecificDeck} from '../utils/api'

export const LOAD_DECKS = "LOAD_DECKS";
export const RECEIVED_SUCCESSFULL_DECKS = "RECEIVED_SUCCESSFULL_DECKS";
export const SAVE_DECK = "SAVE_DECK";
export const ADD_CARD = "ADD_CARD";

/**
 * 
 * @author Rupen Gosrani
 */
export const loadDecks = () => (dispatch) => {
   return  getAllDecks().then(response => JSON.parse(response));
}

/**
 * @description receivedSuccessDecks action is used to describe a correct deck event sent to the reducer after 
 *              retreiving from the AsynchStorage object invoked from the component. A middleware is used to dispatch the payload. This action
 *              is dispatched as a result from a request to load decks from the loadDecks action as part of the promise
 *              chain, lastly invoked.   
 *       
 *              
 * @param {*} json 
 */
export const receivedSuccessDecks = (json) => (dispatch) => {
    dispatch({
        type: RECEIVED_SUCCESSFULL_DECKS,
        payload: json
    });
}

/**
 * @description 
 * @param {*} title 
 */
export const saveTitle = (title) => (dispatch) =>{
    return saveDeck(title).then(response => JSON.parse(response));
}

/**
 * 
 * @param {*} key 
 * @param {*} question 
 * @param {*} answer 
 */
export const addCardToDeck = (key,question,answer) => (dispatch) => {
    return addCardToSpecificDeck(key,question,answer)
}
