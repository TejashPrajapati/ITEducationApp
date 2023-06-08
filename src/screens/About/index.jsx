import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";


const Aboutus = () => {
  

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Dr.RonakPanchal</Text>
      <Text style={styles.paraStyle}> I am a full stack developer</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={require("../../assets/drronak.jpg")}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
        I would like to say something about me. I am Senior Data Scientist and an IT Project – Manager in Cognizant MNC company at Pune Location.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/ronnypanchal25/")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/@ronakpanchal4032"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://drronakpanchal.wordpress.com/")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJgj9xWpWO3bpPgcEtSBulvjvaBNqQYCD4M4abkGAMA&usqp=CAU&ec=48665699",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    // marginTop: 50,
    marginTop: 40,
    marginBottom: 10,
    // fontFamily: "Nunito_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
    // fontFamily: "WorkSans_400Regular",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    // fontFamily: "Nunito_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    // fontFamily: "WorkSans_400Regular",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Aboutus;
