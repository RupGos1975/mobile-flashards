import React, { Component} from 'react';
import {View, Text, StyleSheet,Platform} from 'react-native';
import {connect} from 'react-redux';

import {white,black,gray,red,green} from '../../utils/colors';
import {loadNextQuestion} from '../../actions/quizActions';
import {Questions} from './Questions';
import {ReportCard} from './ReportCard';

/**
 * @description
 * 
 * @author Rupen Gosrani
 */
class Quiz extends Component{
    state={
        showAnswer:false,
        currentIndex:0,
        correctAnswer:0
    }
    componentDidMount(){
        const {questions} = this.props;
        this.setState({
            questions,
            activeQuestion:questions[this.state.currentIndex].question,
            activeAnswer:questions[this.state.currentIndex].answer,
            totalQuestions:questions.length
        })
    }
    toggleShowHideAnswer = () => {
        this.setState((prevState,currentState) => ({
            showAnswer: !prevState.showAnswer
          }
        ));
    }
    loadNextQuestion = (answered) => {
        this.setState((prevState,currentState) => ({
            showAnswer:false,
            correctAnswer:(answered === 'correct') ? prevState.correctAnswer + 1 : prevState.correctAnswer,
            currentIndex:prevState.currentIndex + 1,
            activeQuestion:prevState.questions[prevState.currentIndex + 1] && prevState.questions[prevState.currentIndex + 1].question,
            activeAnswer:prevState.questions[prevState.currentIndex + 1] && prevState.questions[prevState.currentIndex + 1].answer,
        }));
    }
    restartQuiz = () => {
        this.setState((prevState,currentState) => ({
            showAnswer:false,
            currentIndex:0,
            correctAnswer:0,
            questions:prevState.questions,
            totalQuestions:prevState.questions.length,
            activeQuestion:prevState.questions[0].question,
            activeAnswer:prevState.questions[0].answer
        }));
       
    }
    render(){
        let {totalQuestions,currentIndex,correctAnswer} = this.state;
        let {goToDeck,deck} = this.props;
        return (
            
            <View style={styles.parent}>
               {(currentIndex < totalQuestions) ? <Questions {...this.state} 
                                                             showHideAnswer={this.toggleShowHideAnswer}
                                                             nextQuestion={this.loadNextQuestion}/> :
                                                <ReportCard totalQuestions={totalQuestions} 
                                                            navigateToDeck={() => goToDeck(deck)}
                                                            restart={() => this.restartQuiz()}
                                                            correctAnswer={correctAnswer}/>
               }
            </View>
        );
    }
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
    }
    
});

const mapStateToProps = (state, {navigation}) => {
    return{
        questions:navigation.state.params.deck.questions,
        deck: navigation.state.params.deck                     
    }
}

const mapDispatchToProps = (dispatch, {navigation}) => {
    const {deckId} = navigation.state.params;
    return{
        remove: () => dispatch(addEntry({
            [entryId]: timeToString() === entryId ? getDailyReminderValue() : null
        })),
        goToDeck: (deck) => navigation.navigate('DeckDetail',{deckId:navigation.state.params.deck.title}),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz)