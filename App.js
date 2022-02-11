import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DashboardStack} from './Components/Navigator'

export default function App() {
  return (

      <NavigationContainer>
      <DashboardStack/>
      </NavigationContainer>
  );
}