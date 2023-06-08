import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput } from "react-native";
import React from "react";
import Menu from "../Menu/index";
import COLORS from "../../consts/color";
import SPACING from "../../consts/SPACING";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";

const Homescreen = (props) => {
  const description =
    "\"Client satisfaction is our key goal.\" \n\n We are software development company and complete IT solution provider that focuses on providing highly qualitative, timely delivered and cost-effective client solutions. Our Key clients are loyal to us because we have volume up their business and has also spread it to world globally."

  return (
    <View style={styles.mainContainer}>
      <View style={{ backgroundColor: "#C9EEFF", height: 100, paddingHorizontal: 40, marginRight: -20, marginLeft: -20 }}>
      <View>
      <Image style={{height: SPACING*5,width:SPACING*15, marginTop: 35, marginLeft: -20}} source={require("../../assets/banana.png")}/>
      <TouchableOpacity 
      style={{
        marginLeft: 300,
        marginTop: -35,
      }}
      >
      <AntDesign
                    name="setting"
                    color={COLORS.primary}
                    size={SPACING * 3}
                  />
      </TouchableOpacity>
        <Text style={{ fontStyle: 'italic', color: COLORS.white, fontSize: 20, fontWeight: 'bold', marginTop: 50, marginLeft: -10 }}>Banana ITEducationApp</Text>
       
      </View>
    </View>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/drronak.jpg")}
        />

        <Text style={styles.mainHeader}>Welcome to Banana </Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}>
          {/* {props.channelName} */}
          IT Education App
        </Text>
       
      </View>
      <ScrollView>
{/* 
<Text style={styles.paraStyle}>{description} </Text> */}
<View>
  <Text style={styles.paraStyle}> Client satisfaction is our key goal.</Text>
</View>
<View>
  <Text style={styles.paraStyle1}>We are software development company and complete IT solution provider that focuses on providing highly qualitative, timely delivered and cost-effective client solutions. Our Key clients are loyal to us because we have volume up their business and has also spread it to world globally.</Text>
</View>
</ScrollView>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 30,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 25,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "90%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 40,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    // fontFamily: "Nunito_600SemiBold",
  },

  paraStyle: {
    textAlign: "center",
    justifyContent:"space-between",
    fontSize: 19,
    color: "#4c5dab",
    marginTop: 30,
    
    paddingBottom: 50,
    lineHeight: 26,
    // fontFamily: "JosefinSans_400Regular",
  },
  paraStyle1: {
    textAlign: "justify",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: -20,
    
    paddingBottom: 50,
    lineHeight: 26,
    
    // fontFamily: "JosefinSans_400Regular",
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});

export default Homescreen;

// import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView, Dimensions } from 'react-native'
// import React,{useEffect, useState} from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import SPACING from '../../consts/SPACING'
// import COLORS from '../../consts/color'
// // import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
// import CATEGORIES from '../../constants/CATEGORIES'
// import ADVANTURES from '../../constants/ADVANTURES'
// import IPPORT from '../../IPPORT'
// import Ionicons from "@expo/vector-icons/Ionicons";
// // import axios from 'axios'


// const WIDTH = Dimensions.get("screen").width;

// const Homescreen = () => {

//   const [activeCategory , setactiveCategory ] = useState(0)

//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // const fetchData = async () => {1
//   //   try {
//   //     const response = await axios.get(
//   //       `http://${IPPORT}:3000/api/ucategory`
//   //     );
//   //     setData(response.data);
//   //     // console.log(response.data)
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };



//   return (
//    <SafeAreaView>
//     <View style={{padding:SPACING*2}}> 
//     <View  style={{ flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
//       <Text style={{fontSize:SPACING*3,fontWeight:'bold',color:COLORS.dark1}}>Discover</Text>
//       <Image style={{height: SPACING*5,width:SPACING*5,borderRadius:SPACING*5}} source={require("../../assets/student.jpeg")}/>
//       </View>
//       <ScrollView style={{marginVertical: SPACING * 2}} horizontal>
//         {CATEGORIES.map((category,index) => (
//           <TouchableOpacity 
//           onPress={() => setactiveCategory(index)}
//           style={{ marginRight: SPACING}}
//           key={category.id}>
//           <Text style={[{ fontSize: SPACING * 2,color: COLORS.dark1}, activeCategory === index && {color: COLORS.primary1}]}>{category.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <Text style={{ fontSize: SPACING * 1.7, color: COLORS.dark1 }}>
//           {CATEGORIES[activeCategory].tours.length + " "}
//           {CATEGORIES[activeCategory].title}
//         </Text>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           snapToInterval={WIDTH * 0.7}
//           decelerationRate="fast"
//           pagingEnabled
//           style={{ marginVertical: SPACING * 2 }}
//         >
//           {CATEGORIES[activeCategory].tours.map((tour, index) => (
//             <TouchableOpacity
//               style={{
//                 width: WIDTH * 0.7,
//                 height: WIDTH * 0.9,
//                 overflow: "hidden",
//                 borderRadius: SPACING * 2,
//                 marginRight: SPACING * 2,
//               }}
//               key={index}
//             >
//               <View
//                 style={{
//                   position: "absolute",
//                   zIndex: 1,
//                   height: "100%",
//                   width: "100%",
//                   backgroundColor: COLORS.transparent,
//                   justifyContent: "space-between",
//                   padding: SPACING,
//                 }}
//               >
//                 <TouchableOpacity
//                   style={{
//                     alignSelf: "flex-end",
//                     padding: SPACING / 2,
//                     backgroundColor: COLORS.white,
//                     borderRadius: SPACING * 5,
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Ionicons
//                     name="heart-outline"
//                     color={COLORS.primary}
//                     size={SPACING * 3}
//                   />
//                 </TouchableOpacity>
//                 <Text
//                   style={{
//                     fontSize: SPACING * 2,
//                     color: COLORS.white,
//                     fontWeight: "700",
//                     marginLeft: SPACING,
//                   }}
//                 >
//                   {tour.title}
//                 </Text>
//               </View>
//               <Image
//                 source={tour.image}
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Text
//             style={{
//               fontSize: SPACING * 2,
//               fontWeight: "bold",
//               color: COLORS.dark,
//             }}
//           >
//             {/* Feeling Adventurous? */}
//           </Text>
//           <TouchableOpacity>
//             <Text
//               style={{
//                 fontSize: SPACING * 1.4,
//                 fontWeight: "500",
//                 color: COLORS.primary,
//               }}
//             >
//               Show all
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView
//           horizontal
//           pagingEnabled
//           style={{ marginVertical: SPACING * 2 }}
//           showsHorizontalScrollIndicator={false}
//         >
//           {ADVANTURES.map((adventure) => (
//             <TouchableOpacity
//               key={adventure.id}
//               style={{
//                 marginRight: SPACING * 3,
//                 padding: SPACING,
//                 alignItems: "center",
//               }}
//             >
//               <View style={{ width: SPACING * 3, height: SPACING * 3 }}>
//                 <Image
//                   source={adventure.image}
//                   resizeMode="contain"
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </View>
//               <Text
//                 style={{
//                   textTransform: "uppercase",
//                   fontSize: SPACING,
//                   marginTop: SPACING,
//                 }}
//               >
//                 {adventure.title}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//     </View>
//    </SafeAreaView>
//   )
// }

// export default Homescreen

// const styles = StyleSheet.create({})