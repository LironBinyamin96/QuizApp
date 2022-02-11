import React, { useCallback, useEffect, useState } from 'react';
import {Text, View, Image, TouchableOpacity,StyleSheet} from 'react-native';
import Styles from '../Util/AppStyle';

 const Categories = props => {

    return (
      <View style={Styles.container}>

        <View style={Styles.View20}>
        <View style={Styles.ViewText}><Text style={Styles.FontTitle}>Categories</Text></View>
        <View style={Styles.ViewLogo}><Image source={require('../assets/images/logo.png')} style={Styles.ImageLogo}/></View>
        </View>

          <View style={Styles.View80}>
          <TouchableOpacity style={Styles.ButtonCategories}
             onPress = {() => {props.navigation.navigate('QuizScreen',{allData: 21})}} >
            <Text style={Styles.FontCategories}>Sports</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.ButtonCategories}
            onPress = {() => {props.navigation.navigate('QuizScreen',{allData: 27})}} >
            <Text style={Styles.FontCategories}>Animals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.ButtonCategories}
            onPress = {() => {props.navigation.navigate('QuizScreen',{allData: 23})}} >
            <Text style={Styles.FontCategories}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.ButtonCategories}
            onPress = {() => {props.navigation.navigate('QuizScreen',{allData: 18})}} >
            <Text style={Styles.FontCategories}>Computer Science</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.ButtonCategories}
            onPress = {() => {props.navigation.navigate('QuizScreen',{allData: 14})}} >
            <Text style={Styles.FontCategories}>TV</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.ButtonCategories}
            onPress = {() =>{props.navigation.navigate('QuizScreen',{allData: 12})}} >
            <Text style={Styles.FontCategories}>Music</Text>
          </TouchableOpacity>
          </View>
       
      </View>
    );
  }

  export const screenOptions =() => {
    return {
        headerTitle: 'Categories',
        headerShown: false
        
    }
}

export default Categories;
