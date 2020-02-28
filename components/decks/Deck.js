import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,TouchableHighlight,Animated } from 'react-native';
import {black, gray, white} from '../../utils/colors';

/**
 * @description The Decks component is a stateless functional component that passes a deconstructed props object
 *              to return a shadow dom of a user interactable View and animates each individual Deck when touched or pressed or clicked.
 * @param {*} param0 Object Shorthand Deconstructor
 */
export const Decks = ({title,questions,navigation,bounceValue=new Animated.Value(1)}) => {
       const { width, height } = Dimensions.get('window');
       function AnimateDeck(){
            Animated.sequence([
                Animated.timing(bounceValue,{duration:1, toValue:0}),
                Animated.spring(bounceValue, {toValue:1, speed:8,bounciness:7})
            ]).start(() => {
                navigation.navigate('DeckDetail',{deckId:title})
            });
       }
       return ( 
        <TouchableOpacity  onPress={() => {AnimateDeck();} }>
            <View style={[styles.container, {marginTop:40,width}]}  >
                <Animated.View style={[styles.box,{transform:[{scale:bounceValue}]}]}>
                    <Text style={styles.title}>{title}</Text>
                </Animated.View>
                <Animated.View style={[styles.box, {marginBottom:40},{transform:[{scale:bounceValue}]}]}>
                    <Text style={styles.number}>{questions.length} Cards</Text>
                </Animated.View>
            </View>
        </TouchableOpacity>
       );
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        marginTop:40
    },
    container:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor:white,
        borderLeftColor:white,
        borderRightColor:white,
        borderBottomColor:gray,
        borderStyle:"solid",
        borderWidth:2
    },
    title:{
        color: black,
        fontWeight: 'normal',
        fontSize: 30
    },
    number:{
        color: gray,
        fontWeight: 'bold',
        fontSize: 20
    },
    box: {
        margin: 5
    }
});