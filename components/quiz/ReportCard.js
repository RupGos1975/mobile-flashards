import React, { Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {white,black,gray,red,green} from '../../utils/colors';
import {TextButton} from '../TextButton';
import {setLocalNotification,clearLocalNotifications}  from '../../utils/helpers';

/**
 * 
 * @param {*} param0 
 */
export const ReportCard = ({totalQuestions,correctAnswer,navigateToDeck,restart}) => {
    clearLocalNotifications().then(setLocalNotification);
    return (
        <View style={styles.parent}>
           <View style={styles.container}>
                <Text style={styles.question}>{(correctAnswer/totalQuestions) * 100}%</Text>
                <Text style={[{fontSize:20},{color:red}]}>Your Score</Text>
                <TextButton style={styles.restartBtn} onPress={
                    () => restart()
                }>Restart Quiz</TextButton>
                <TextButton style={styles.backToQuiz} onPress={
                    () => navigateToDeck()
                }>Back To Deck</TextButton>
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
    restartBtn:{
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
    backToQuiz:{
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