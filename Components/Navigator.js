import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../Util/AppColors';


//TODO IMPORT SCREENS
import DashboardScreen, {screenOptions as DashboardScreenOptions} from './Dashboard';
import CategoriesScreen,{screenOptions as CategoriesScreenOptions} from './Categories';
import QuizScreen,{screenOptions as QuizScreenOptions} from './QuizScreen';
import ResultScreen,{screenOptions as ResultScreenOptions} from './ResultScreen';


const defaultScreenOptions = {
    headerStyle: {backgroundColor: Colors.happy_green},
    headerTintColor: Colors.white
}

//TODO CREATE STACK(s) NAVIGATION
const DashboardStackNavigator = createStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator screenOptions={defaultScreenOptions}>
            <DashboardStackNavigator.Screen name='Dashboard' component={DashboardScreen} options={DashboardScreenOptions} />
            <DashboardStackNavigator.Screen name='Categories' component={CategoriesScreen} options={CategoriesScreenOptions} />
            <DashboardStackNavigator.Screen name='QuizScreen' component={QuizScreen} options={QuizScreenOptions} />
            <DashboardStackNavigator.Screen name='ResultScreen' component={ResultScreen} options={ResultScreenOptions} />

        </DashboardStackNavigator.Navigator>
    )
}




