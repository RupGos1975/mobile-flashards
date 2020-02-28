import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {purple, white,black} from './utils/colors';
import thunk from 'redux-thunk';
import {CardsStatusBar} from './components/CardsStatusBar';
import {MainNavigator} from './components/MainNavigator';
import {deckReducer} from './reducers/deckReducer';
import {quizReducer} from './reducers/quizReducer';
import {loadDecks} from './utils/api';
import {setLocalNotification,clearLocalNotifications}  from './utils/helpers'

/**
 * @description combineReducers function is invoked to insert a list of multiple reducers to register to the Redux Store. Each reducer is passed in as an object, but 
 *              must be exported in order to be imported. This will produce a single root reducer that will be passed into the store.
 */
const rootReducer = combineReducers({
  deckReducer,quizReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

/**
 * @description This App is a Stateless Class Component that provides a container or entry point to the main component that 
 *              shows the each childrend within a Stack Navigator. The stack will control what is viewable on the screen. Screens are added(in-view)
 *              and/or removed(out-view) through a First-in First out approach. The viewable is screen will get popped out of view once a navigate function is 
 *              is invoked to push the requested view in the screen.
 *              
 * 
 * @author Rupen Gosrani
 */
export default class App extends Component {
  componentWillMount(){
    clearLocalNotifications()
    .then(setLocalNotification);
    loadDecks();
    
  }
  render() {
    return(
      <Provider store={store}>
        <View style={{flex:1}}>
          <CardsStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator/>
        </View>
      </Provider>
    );
    
  }
}


