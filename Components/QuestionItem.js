import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';
import Colors from '../Util/AppColors';
import Styles from '../Util/AppStyle';

//TODO Function for Colors
  const StatusColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return Colors.green;
      case 'hard': return Colors.red;
      case 'medium': return Colors.orange;
    }
  }

//TODO Function for correcting text in questions
  const CleanString = (string) => {
    let newString = string;
    let tags = [
      "&quot;",
      "&#039;",
      "&lt;",
      "&gt;",
      "&rsquo;s"
    ];
    tags.forEach(element => {
      while (newString.includes(element))
        newString = newString.replace(element, "")
    });
    return newString
  }

const QuestionItem = props => {
  const timeToTimer= () =>{
    if ((props.questionItem.id)+1 <=10){
      return 30
    }
    else if ((props.questionItem.id)+1 >10 && (props.questionItem.id)+1 <=15){
      return 15
    }
    else {
      return 10
    }
  }

  const finishedTimer= () =>{
    props.onNextQuestion(props.questionItem.id);
  }


    return (
    <View>

    <View style={Styles.View15}> 
          <View style={Styles.ViewText}><Text style={Styles.FontTitle}>Question {(props.questionItem.id)+1}/{props.numberOfQuestion} </Text></View>
          <View style={Styles.ViewLogo}><Image source={require('../assets/images/logo.png')} style={Styles.ImageLogoForQuiz} /></View>
    </View>
              
        <View style={Styles.View85}>
          <View>
            <Text style= {{fontWeight:'bold'}}>Level: <Text style={{ fontWeight: 'bold', color: StatusColor(props.questionItem.difficulty) }} >{props.questionItem.difficulty}</Text>{"\n"}{"\n"}</Text>
          </View>
          <View>
             <Text style= {{fontSize:25}}>{CleanString(props.questionItem.title)} {"\n"}{"\n"}</Text>
             {
                 props.questionItem.answers.map((answer , index)=>(
                    <TouchableOpacity key={index} style={Styles.ButtonQuestion} onPress={() => {
                        props.onNextQuestion(props.questionItem.id);
                        props.onAnswer(answer)
                    }}>
                        <Text> {CleanString(answer.title)} </Text>
                    </TouchableOpacity>
                 ))
             }
          </View>
          <View>
          <Text> {"\n"}{"\n"} </Text>
      <CountDown 
        until={timeToTimer()}
        onFinish={() => finishedTimer()}
        digitStyle={{backgroundColor: Colors.white,
          borderRadius: 50,
           borderWidth: 8,
          borderColor: Colors.blue,}}
        timeToShow={['S']}
        timeLabels={{s: null}}
        size={40}
        
              />
          </View>
            </View>
            
    </View>

    )
}

export default QuestionItem;