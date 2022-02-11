import React, { useCallback, useEffect, useState } from 'react';
import {Text, View, Image, TouchableOpacity,StyleSheet} from 'react-native';
import Styles from '../Util/AppStyle';

 const ResultsScreen = props => {

   const winOrLoseScreen = props.route.params.counter;
    return (
      winOrLoseScreen <10?(
      <View>
       <View style={Styles.ViewForLose15}> 
          <View style={Styles.ViewLogoForLose}><Image source={require('../assets/images/logo.png')} style={Styles.ImageLogoForQuiz} /></View>
      </View>
        <View style={Styles.ViewForWinAndLose85}>
          <View>
           <Text style={Styles.FontForLose}> FAILED </Text>
          </View>
          <View>
           <Text style={Styles.FontForResult}>You need to answer 10 correct answers</Text>
          <Image source={require('../assets/images/failed_character.png')} style={Styles.ImageForWinAndLose}/>
          </View>
        </View>
      </View>
      ):(
      <View>
       <View style={Styles.ViewForWin15}> 
          <View style={Styles.ViewLogoForWin}><Image source={require('../assets/images/logo.png')} style={Styles.ImageLogoForQuiz} /></View>
      </View>
        <View style={Styles.ViewForWinAndLose85}>
          <View>
           <Text style={Styles.FontForWin}> GREAT JOB </Text>
          </View>
          <View>
           <Text style={Styles.FontForResult}> You answered {winOrLoseScreen} questions correctly</Text>
          <Image source={require('../assets/images/success_character.png')} style={Styles.ImageForWinAndLose}/>
          </View>
        </View>
      </View>
      )

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export const screenOptions =() => {
    return {
        headerTitle: 'placeHolder ResultsScreen',
        headerShown: false
    }
}

export default ResultsScreen;