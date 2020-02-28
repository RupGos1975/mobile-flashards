import React,{Component} from 'react';
import {FlatList, View, StyleSheet, TouchableHighlight} from 'react-native';
import {getDecks} from '../../utils/helpers';
import {Decks} from '../../components/decks/Deck';
import {connect} from 'react-redux';


/**
 * @description The DeckList is a Stateless Functional Component that renders a FlatList which lazy renders the decks to which is capable of being visible
 *              will be rendered as an item in the list. The FlatList height and width will be relative to the device's screen, therefore,
 *              based on Dimensions on the screen will each Deck Tile render relatively against the number of total items in the array. 
 *              As the user scrolls and there are more items in the array not yet visible on the screen will then be rendered on-demand. 
 * @param {*} props 
 */
const DeckList = (props) => {
    const {decks,updated,navigation,screenProps} = props;
    const renderDeck = ({item}) => (<Decks  {...item} navigation={screenProps.rootNavigation}/>);
    const _keyExtractor = (item, index) => item.title;
    return (
        <View style={styles.container}>
            <FlatList data={decks} 
                      renderItem={renderDeck}
                      extraData={decks}
                      keyExtractor={_keyExtractor}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
});

const mapStateToProps = (state, {navigation}) => {
    return{
        decks:state.deckReducer.deckList.decks,
        updated:!state.deckReducer.deckList.updated
    }
}

export default connect(mapStateToProps)(DeckList)

