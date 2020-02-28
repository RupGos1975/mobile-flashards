import {LOAD_NEXT_QUESTION} from '../actions/quizActions';

const INITIAL_STATE = { 
    questions: {questions: [], error:null, loading: false, updated:false},
    activeQuestion:{question:null, error:null, loading: false}
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const quizReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case LOAD_NEXT_QUESTION:
            return {
                ...state,
                activeQuestion:{
                    question: action.payload[0].question,
                    answer: action.payload[0].answer,
                    error:null, 
                    loading: false, 
                    updated:true,

                }
            }
        default:
            return state
    }
} 