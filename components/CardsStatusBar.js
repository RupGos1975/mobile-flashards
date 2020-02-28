import React from 'react';
import {StatusBar, View} from 'react-native';
import {Constants} from 'expo';

/**
 * 
 * @param {*} param0 
 */
export const CardsStatusBar = ({backgroundColor, ...props}) =>(
    <View style={{backgroundColor,height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
)
  