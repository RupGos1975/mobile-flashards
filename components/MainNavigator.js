import React from 'react';
import DeckNavigator from './decks/DeckNavigator'
import DeckDetail from './decks/DeckDetail' 
import AddCard from './card/AddCard';
import Quiz from './quiz/Quiz';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {white,purple} from '../utils/colors';

export const MainNavigator = StackNavigator({
    Home:{
        screen: ({ navigation }) => <DeckNavigator screenProps={{ rootNavigation: navigation }} />
    },
    DeckDetail:{
        screen:DeckDetail,
        navigationOptions:{
          headerTitle:"Cards",
          headerTintColor:white,
          headerStyle:{
            backgroundColor:purple
          }
        }
      },
    AddCard:{
        screen:AddCard,
        navigationOptions:{
            headerTitle:"Add Card",
            headerTintColor:white,
            headerStyle:{
              backgroundColor:purple
            }
          }
    },
    Quiz:{
        screen:Quiz,
        navigationOptions:{
            headerTitle:"Quiz",
            headerTintColor:white,
            headerStyle:{
              backgroundColor:purple
            }
          }
    }
    
  
  });