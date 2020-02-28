import {AsyncStorage} from 'react-native'
import {decks} from './helpers';

const DECKS_KEY="DECKS";

/**
 * @description This method sets or associates the decks object data mapping to the DECKS_KEY property.
 *              Sets the item to initialize the current state of decks that are already set on startup.  
 * 
 * @author Rupen Gosrani
 */
export const loadDecks = () => {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks)) ;
}

/**
 * @description Returns all the decks by referencing the DECKS_KEY from the AsynStorage. The AsyncStorage returns
 *              a promise object.
 * 
 * @author Rupen Gosrani
 */
export const getAllDecks = () => {
    return AsyncStorage.getItem(DECKS_KEY);
}

/**
 * @description This updates the existing DECKS object by appending another pair of key values when adding a new card.
 * 
 * @param {*} title
 * @author Rupen Gosrani 
 */
export const saveDeck = (title) => {
    return AsyncStorage.mergeItem(DECKS_KEY,JSON.stringify({
        [title]:{
            title: title,
            questions: []
        }
    }))
}

/**
 * @description This method adds a 
 * @param {*} key 
 * @param {*} question 
 * @param {*} answer 
 */
export const addCardToSpecificDeck = (key,question,answer) => {
    return AsyncStorage.getItem(DECKS_KEY).then((results ) => {
        const data = JSON.parse(results);
        data[key].questions.push({question,answer}); 
        AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data)) ;
    });
}
 


