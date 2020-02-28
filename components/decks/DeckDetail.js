import React, { Component} from 'react';
import {View, Text, StyleSheet,Animated, Platform, Alert} from 'react-native';
import {connect} from 'react-redux';
import {TextButton} from '../TextButton';
import {white,black,gray} from '../../utils/colors';

/**
 * @description The DeckDetail component is a stateless functional component that passes a deconstructed props object
 *              to return a shadow dom of a View of the details of each deck from the verticle list from the main screen
 *              or list screen. The "Add Card" button navigates or pushes the AddCard component into view and pops the DeckDetail
 *              out of view. 
 * 
 * @param {*} param0 Object Shorthand Deconstructor
 */
const DeckDetail = ({deck,goToAddCard,goToQuiz}) => {
    const {title,questions} = deck;
    return (
        <View style={styles.container}>
            <Text style={styles.deckTitle}>{title}</Text>
            <Text style={styles.deckCards}>{questions.length} cards</Text>
            <TextButton style={[styles.newCardBtn]} onPress={() => goToAddCard()}>Add Card</TextButton>
            <TextButton style={[styles.quizBtn]} onPress={() => (questions.length > 0) ? 
                        goToQuiz(deck) : Alert.alert("ERROR","You must add a question.")}>Start Quiz
            </TextButton>
        </View>     

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      margin:0
    },
    deckTitle:{
        fontSize:45,
        marginBottom:0
    },
    deckCards:{
        fontSize:25,
        color:gray,
        marginBottom:60,
    },
    newCardBtn:{
        color:black,
        backgroundColor:white,
        padding:Platform.OS === "ios" ? 20 : 15,
        borderTopColor:black,
        borderBottomColor:black,
        borderLeftColor:black,
        borderRightColor:black,
        borderWidth:1,
        height:55,
        marginLeft:45,
        marginRight:40,
        fontSize:20,
        width:200,
        textAlign:"center",
        marginBottom:10
        
    },
    quizBtn:{
        color:white,
        backgroundColor:black,
        padding:Platform.OS === "ios" ? 20 : 15,
        borderTopColor:black,
        borderBottomColor:black,
        borderLeftColor:black,
        borderRightColor:black,
        borderWidth:1,
        height:55,
        marginLeft:45,
        marginRight:40,
        fontSize:20,
        width:200,
        textAlign:"center"
        
    }
    
});

const mapStateToProps = (state, {navigation}) => {
    const {deckId} = navigation.state.params;
   
    return{
        deckId,
        deck:state.deckReducer.deckList.decks.filter((deck) => deck.title === deckId)[0]
    }
}

const mapDispatchToProps = (dispatch, {navigation}) => {
    const {deckId} = navigation.state.params
    return{
        goBack: () => navigation.goBack(),
        goToAddCard: () => navigation.navigate('AddCard',{deckId}),
        goToQuiz: (deck) => navigation.navigate('Quiz',{deck})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckDetail)