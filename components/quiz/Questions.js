import React, { Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {white,black,gray,red,green} from '../../utils/colors';
import {TextButton} from '../TextButton';

/**
 * 
 */
export const Questions = ({showAnswer,
                    activeQuestion,
                    activeAnswer,
                    totalQuestions,
                    currentIndex,
                    nextQuestion,
                    showHideAnswer}) => {
    return (
        <View style={styles.parent}>
         <Text style={styles.questionIter}>{currentIndex+1}/{totalQuestions}</Text>
           <View style={styles.container}>
               <Text style={styles.question}>{(showAnswer === true) ?  activeAnswer : activeQuestion}</Text>
               <TextButton style={[styles.answer,{marginBottom:100}]} 
                            onPress={showHideAnswer}>{
                                (showAnswer === true) ? 'Question' : 'Show Answer' 
                                        
                }</TextButton>
               <TextButton style={styles.correct} onPress={
                    () => nextQuestion('correct')
               }>Correct</TextButton>
               <TextButton style={styles.inCorrect} onPress={
                    () => nextQuestion('incorrect')
               }>InCorrect</TextButton>
           </View>
       </View>
   );
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        marginTop:0,
        backgroundColor: white
        
    },
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: "center",
        justifyContent: "center",
        margin:0
      },
    question:{
        color: black,
        fontWeight: 'normal',
        fontSize: 35
    },
    questionIter:{
        fontSize:20,
        margin:10
    },
    answer:{
        fontSize:20,
        color:red
    },
    correct:{
        color:white,
        backgroundColor:green,
        padding:Platform.OS === "ios" ? 20 : 15,
        borderRadius:5,
        height:55,
        marginLeft:45,
        marginRight:40,
        fontSize:20,
        width:200,
        textAlign:"center",
        margin:10
    },
    inCorrect:{
        color:white,
        backgroundColor:red,
        padding:Platform.OS === "ios" ? 20 : 15,
        borderRadius:5,
        height:55,
        marginLeft:45,
        marginRight:40,
        fontSize:20,
        width:200,
        textAlign:"center",
       margin:10
    },
});