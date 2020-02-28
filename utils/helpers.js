import {Notifications, Permissions } from 'expo'
import {View, StyleSheet, AsyncStorage} from 'react-native'



const NOTIFICATION_KEY = "FlashCard:notifications";

/**
 * 
 */
export const getDecks = () => {
    return Object.keys(decks).map((deck) => getDeck(deck));
};

/**
 * 
 * @param {*} id 
 */
export const getDeck = (id) => {
    return typeof id === 'undefined' ? decks : decks[id];
};
    
export const saveDeckTitle = () => {

}

export const addCardToDeck = () => {

}

/**
 * 
 */
export function timeToString (time = Date.now()) {
    const date = new Date(time)
    const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    return todayUTC.toISOString().split('T')[0]
  }

  /**
   * 
   */
  export const clearLocalNotifications = () =>{
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
  }

  /**
   * 
   */
 const createNotification = () =>{
    return{
        title:'Take the Quiz',
        body:"Dont forget to take any quiz for the day.",
        ios:{
            sound:true
        },
        android:{
            sound:true,
            priority:'high',
            sticky:false,
            vibrate:true
        }
    }
 } 

 export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null){
            Permissions.askAsync(Permissions.NOTIFICATIONS)
                .then(({status}) => {
                    if(status === "granted"){
                        Notifications.cancelAllScheduledNotificationsAsync();
                        let tomorrow = new Date();
                        
                        tomorrow.setDate(tomorrow.getDate()+1);
                        tomorrow.setHours(15);
                        tomorrow.setMinutes(56);
                        Notifications.scheduleLocalNotificationAsync(
                            createNotification(),
                            {
                                time:tomorrow,
                                repeat:"day",
                            }
                        )

                        AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true))
                    }
                })
        }
    })  
 } 
export function getDailyReminderValue(){
    return {
        today: "Dont forget to take the quiz."
    }
}

export const decks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }

};