import React, { useCallback, useEffect, useState, } from 'react';
import {Text, View, Image, TouchableOpacity,StyleSheet} from 'react-native';
import Styles from '../Util/AppStyle';

 const Dashboard = (props) => {
  
    return (
      <View style={Styles.container}>
        <Image source={require('../assets/images/splash_logo.png')} style={Styles.ImageContainer}/>
        <View>
          <TouchableOpacity style={Styles.ButtonContainer}
            onPress = {() => {props.navigation.navigate('Categories',{})}} >
            <Text style={Styles.FontContainer} >Let's Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  export const screenOptions =() => {
    return {
        headerTitle: 'Home Page',
        headerShown: false
    }
}
export default Dashboard;
