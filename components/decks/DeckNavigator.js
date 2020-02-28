import React,{Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Platform,View} from 'react-native';
import DeckList from './DeckList';
import NewDeckForm from './NewDeckForm';
import {purple,white} from '../../utils/colors';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {loadDecks,receivedSuccessDecks} from '../../actions/deckActions';


 const DeckTabs = TabNavigator({
    DeckList:{
      screen:DeckList,
      navigationOptions:{
          tabBarLabel:'Deck List'
      }
    },
    NewDeckForm:{
        screen:NewDeckForm,
        navigationOptions:{
            tabBarLabel:'New Deck'
        }
    }
  },
  {
    navigationOptions:{
      header:null
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions:{
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      labelStyle: {
        fontSize: 20,
      },
      style:{
        height:50,
        backgroundColor:Platform.OS === 'ios' ? white : purple,
        shadowColor:'rgba(0,0,0,0.24)',
        shadowOffset:{
          width:0,
          height:3
        },
        
        shadowRadius:6,
        shadowOpacity:1
      }
    }
});

/**
 * @description The Deck Navigator is a Stateless Class Component that serves as the stage for the flashcard-mobile application. This component
 *              will render each container based on the list of screens provided by the object properties passed into the TabNavigator, a component imported from 
 *              react-navigation. The DeckTabs represent the JSX element to which this component will render the TabNavigator.
 * @author Rupen Gosrani
 */
 class DeckNavigator extends Component{
    componentDidMount(){
        this.props.loadDefaultDecks();
    }
    render(){
        const {navigation} = this.props;  
        return (
            <View style={[{flex:1}]}>
                <DeckTabs screenProps={{rootNavigation: this.props.screenProps.rootNavigation}} />
            </View>
        );
    }
}

/**
 * 
 * 
 * @param {*} state 
 * @param {*} ownProps
 * 
 * @author Rupen Gosrani 
 */
const mapStateToProps = (state, ownProps) => {
    return { 
        decks: state.deckReducer.deckList.decks
      };
}

/**
   * 
   * @param {*} dispatch 
   * @param {*} ownProps 
   * @param {*} history 
   * 
   * @author Rupen Gosrani
   */
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadDefaultDecks: () => dispatch(loadDecks()).then((result) => {
            dispatch(receivedSuccessDecks(result));
        })
    }
  }

  
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeckNavigator);
  


