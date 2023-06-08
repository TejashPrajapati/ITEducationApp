import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from '../constants/theme';
import SignInScreen from './signin';
// import Router from "./src/router/router"

const sliders = [
  {
    id: 1,
    title: "persionA",
    description: "Code",
    image: require('../assets/peopleB.png')
  },
  {
    id: 2,
    title: "persionB",
    description: "Code",
    image: require('../assets/peopleB.png')
  },
  {
    id: 3,
    title: "peopleA",
    description: "Code",
    image: require('../assets/personC.png')
  },
]

const OnBord = () => {

    const [showHomePage, setShowHomePage ] = useState(false);

    const buttonLable = (label) => {
      return(
        <View style={{padding: 12}}>
          <Text style={{
            color: COLORS.title,
            fontWeight:"600",
            fontSize: SIZES.h4
          }}>
            {label}
          </Text>
        </View>
      )
    }

    if(!showHomePage){
      return(
       <AppIntroSlider 
        data={sliders}
        renderItem={({item}) => {
          return(
            <View 
            style={{
              flex: 1,
              alignItems:"center",
              padding: 15,
              paddingTop: 180,
            }}
            >
              <Image 
                source={item.image}
                style={{
                  width: SIZES.width ,
                  height: 400,
                }}
                resizeMode='contain'
              />
              <Text
              style={{fontWeight:"bold",color: COLORS.title, fontSize: SIZES.h1}}
              >{item.title}</Text>
              <Text
              style={{
                textAlign:"center",
                paddingTop: 5,
                color: COLORS.title,
              }}
              >{item.description}</Text>
            
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor:COLORS.primay,
          width: 30
        }}
        showSkipButton
        renderNextButton={() => buttonLable("Next")}
        renderSkipButton={() => buttonLable("Skip")}
        renderDoneButton={() => buttonLable("Done")}
        onDone={() =>{
          setShowHomePage(true);
        }}
       />
      )
    }
  return (
   <SignInScreen />
  )
}

export default OnBord

const styles = StyleSheet.create({})