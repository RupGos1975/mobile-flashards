import React,{Component} from 'react';
import {View,Text, StyleSheet, KeyboardAvoidingView,TextInput,Alert} from 'react-native';
import {white,black} from '../../utils/colors';
import {connect} from 'react-redux';
import {TextButton} from '../TextButton';
import {addCardToDeck} from '../../actions/deckActions';
import {loadDecks,receivedSuccessDecks} from '../../actions/deckActions';

/**
 * @description A Stateful Class Component that renders 2 TextInput and a TextButton that maintains the question
 *              and answer's state locally as well as aquire global shared state to add questions or cards. The render method
 *              will extract the question and answer from the local state and access to the addCard and deckId globally through a Redux
 *              state. Redux state is shared globally within the application through a single source of truth through a single tree os state objects.
 * 
 * @author Rupen Gosrani
 */
 class AddCard extends Component {
    state={
        question:"",
        answer:""
    }
    validateFields = () => {
        const {question,answer} = this.state;
        const {addCard,deckId} = this.props;
        (question.length === 0 || answer.length === 0) ? 
                                Alert.alert("Error", "Make sure you entered a valid question and answer" ) :
                                  addCard(deckId,question,answer)
    }
    render(){
        const {question,answer} = this.state;
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput style={styles.input} 
                           value={question}
                           name="question"
                           placeholder="Add your question here"
                           onFocus= {() => this.setState({question : ''})}
                           onChangeText={(question) =>  this.setState({question})}
                    />
                <TextInput style={styles.input} 
                           name="answer"
                           value={answer}
                           placeholder="Add your answer here"
                           onFocus= {() => this.setState({answer : ''})}
                           onChangeText={(answer) => this.setState({answer})}
                    />           
                <TextButton style={[styles.submitBtn]} onPress={() => {
                                this.validateFields();
                                this.setState({question:""})
                                this.setState({answer:""})
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
      input:{
        width:300,
        height:32,
        padding:8,
        borderTopColor:white,
        borderLeftColor:white,
        borderRightColor:white,
        borderWidth:1,
        borderColor:"#757575",
        margin:35
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
});


const mapStateToProps = (state, {navigation}) => {
    const {deckId} = navigation.state.params
    return{
        deckId,
        deck:state.deckReducer.deckList.decks.filter((deck) => deck.title === deckId)[0]
    }
}

const mapDispatchToProps = (dispatch, {navigation}) => {
    const {deckId} = navigation.state.params
    return{
        addCard: (key,question,answer) => dispatch(addCardToDeck(key,question,answer)).then((result) => {
            dispatch(loadDecks()).then((result) => {
                dispatch(receivedSuccessDecks(result));
            }).then(() => {
                navigation.navigate("DeckDetail",{deckId});
            });
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCard);