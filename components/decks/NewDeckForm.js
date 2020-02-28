import React,{Component} from 'react';
import {View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Alert} from 'react-native';
import {TextButton} from '../TextButton';
import {white,black} from '../../utils/colors';
import {connect} from 'react-redux';
import {saveTitle,loadDecks,receivedSuccessDecks} from '../../actions/deckActions';


/**
 * @description This component is a Stateful Class Component that renders a View of a title text that asks what the new title of the deck would be
 *              and would add to the list of decks via accessing it from the AsyncStorage.
 */
 class NewDeckForm extends Component{
    state={
        input:''
    }
    handleTextChange = (input) => {
        this.setState(() => ({
            input
        }));
    }
    validateFields = () => {
        const {input} = this.state;
        const {saveDeck} = this.props;
        (input.length === 0) ? Alert.alert("Error", "You must enter a valid deck name") : saveDeck(input) 

    }
    render(){
        const {input} = this.state;
        const {saveDeck} = this.props;
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.newDeckTitle}>What is the title of your new deck?</Text>
                <TextInput style={styles.input} 
                           value={input}
                           placeholder="Enter Deck Title here"
                           onChangeText={this.handleTextChange}
                             
                />
                <TextButton style={[styles.submitBtn]} onPress={() => {
                                            this.validateFields();
                                            this.setState({input : ''})
                    }
                }>Submit</TextButton>
            </KeyboardAvoidingView>
        );      
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      margin:0
    },
    newDeckTitle:{
        fontSize:30,
        width:"60%"
    },
    submitBtn:{
        color:white,
        backgroundColor:black,
        padding:10,
        height:55,
        marginLeft:45,
        marginRight:40,
        fontSize:30,
        textAlign:"center"
        
    },
    input:{
        width:300,
        height:44,
        padding:8,
        borderTopColor:white,
        borderLeftColor:white,
        borderRightColor:white,
        borderWidth:1,
        borderColor:"#757575",
        margin:50
    }
});

/**
   * 
   * @param {*} dispatch 
   * @param {*} ownProps 
   * @param {*} history 
   * 
   * @author Rupen Gosrani
   */
  const mapDispatchToProps = (dispatch, {screenProps,navigation}) => {
    return {
        saveDeck: (title) => dispatch(saveTitle(title)).then((result) => {
            dispatch(loadDecks()).then((result) => {
                dispatch(receivedSuccessDecks(result))
            }).then(() => {
                screenProps.rootNavigation.navigate("DeckDetail",{deckId:title});
            })
        })
    }
  }

  
  
  export default connect(null, mapDispatchToProps)(NewDeckForm);
  


