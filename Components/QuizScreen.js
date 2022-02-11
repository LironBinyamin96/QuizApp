import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import QuestionItem from './QuestionItem';
import Colors from '../Util/AppColors';
import Styles from '../Util/AppStyle';

const QuizScreen = props => {

  const [question, setQuestion] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [correctQuestion, setCorrectQuestion] = useState(0);
  const [counter, setCounter] = useState(0);

  let tempArr=[];

  const numOfApi = props.route.params.allData;

  useEffect(async() => {
    const baseUrl = 'https://opentdb.com/api.php?amount=20&category=';
    const response = await fetch(`${baseUrl}${numOfApi}`, { method: 'GET' });
    const responseData = await response.json();
    console.log('DATA:' + JSON.stringify(responseData))

     let numberIdForQuestion=0;

    // True
    responseData.results.forEach(question =>{
      let answers=[];
      const correctAnswer={title: question.correct_answer, isCorrect: true };
      answers.push(correctAnswer);

  // False
      question.incorrect_answers.forEach(item =>{
        const incorrectAnswer={title: item, isCorrect: false };
        answers.push(incorrectAnswer);

      })

      const loopQuestion = {
        id:numberIdForQuestion++,
        title: question.question,
        type: question.type,
        category: question.category,
        difficulty: question.difficulty,
        answers: randomAnswers(answers),


      }
      tempArr.push(loopQuestion);
    })
    console.log('Arr:' + JSON.stringify(tempArr))
    setQuestion(tempArr)
  },[]);

  const randomAnswers = (arr) => {
    let correctIndex= arr.length, randomIndex;
    while(correctIndex != 0){
      randomIndex = Math.floor(Math.random() * correctIndex)
      correctIndex--;
      [arr[correctIndex], arr[randomIndex]] = [arr[randomIndex],arr[correctIndex]];
    } 
    return arr;
  }

 const onAnswer = (answer) =>{
      let cnt = counter
      if (answer.isCorrect == true)
      {
        cnt++;
        setCounter(cnt)
      }
      
      console.log('counter:' +JSON.stringify(cnt));
      console.log('ans:' +JSON.stringify(answer.isCorrect));

    }
    const onNextQuestion = () => {
      try {
        let number = correctQuestion;
        number++;
        // console.log('number:' +JSON.stringify(number));
        setCorrectQuestion(number);
        let nextQuest = question[correctQuestion].id;
        setNextQuestion(nextQuest);
        
      } catch (error) {
        props.navigation.navigate('ResultScreen',{counter})
      }

    }
  
  const lengthOfQues = question.length;

  const questionsUI= question.map((question, index) =>{
    if (nextQuestion == question.id){
    return <QuestionItem 
    key={index} 
    questionItem={question}
    numberOfQuestion={lengthOfQues}
    onNextQuestion={onNextQuestion}
    onAnswer = {onAnswer}
     />
    }
  })
  //TODO Function for correcting text in questions
  const CleanString = (string) => {
    let newString = string;
    let tags = [
      "&quot;",
      "&#039;",
      "&lt;",
      "&gt;"
    ];
    tags.forEach(element => {
      while (newString.includes(element))
        newString = newString.replace(element, "")
    });
    return newString
  }

  return (
    <View >
    {question.length >0 ? (questionsUI) : (<Text style={Styles.FontForResult}> Loading...</Text>)}
    </View>
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

export const screenOptions = () => {
  return {
    headerTitle: 'Quiz',
    headerShown: false
  }
}

export default QuizScreen;




