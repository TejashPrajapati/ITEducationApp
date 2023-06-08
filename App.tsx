import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBord from './src/screens/OnBord'
import SignInScreen from './src/screens/signin'
import SignUpScreen from './src/screens/signup'
import Homescreen from './src/screens/Home'
import Aboutus from './src/screens/About'
import Contactus from './src/screens/Contact'
import Student from './src/screens/Student'
import Course from './src/screens/Course'
import Menu from './src/screens/Menu'
import Subjects from './src/screens/Subjects/SubjectDetails'
import TOURS from './src/constants/TOURS'
import CourseDetails from './src/screens/Course/CourseDetails'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name='OnBord' component={OnBord} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        <Stack.Screen name='Subjects' component={Subjects} />
        <Stack.Screen name='Aboutus' component={Aboutus} 
        options={{
          headerShown: true
        }}
        />
        <Stack.Screen name='Student' component={Student} 
        options={{
          headerShown: true,
        }}
        />
        <Stack.Screen name='Course' component={Course} 
        options={{
          headerShown: true,
        }}
        />
        <Stack.Screen name='CourseDetails' component={CourseDetails} 
        options={{
          headerShown: true,
        }}
        />
        <Stack.Screen name='Contactus' component={Contactus}
         options={{
          headerShown: true
        }}
        />
        <Stack.Screen name='Homescreen' component={Homescreen} 
         options={{
          headerShown: false,
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitle: "Home",
          //headerTitleAlign: 'center'
        }}
        />
        
        <Stack.Screen name='Menu' component={Menu} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App