import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {purple} from '../utils/colors';

/**
 * @description 
 * @param {*} param0 
 */
export const TextButton = ({children, onPress, style={}}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.resetBtn, style]}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    resetBtn:{
        textAlign:"center",
        color:purple
    }
});