import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
// import Checkbox from "expo-checkbox";
// import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
// import { Nunito_700Bold } from "@expo-google-fonts/nunito";
// import AppLoading from "expo-app-loading";
import IPPORT from "../../IPPORT";
import COLORS from "../../consts/color";

const Contactus = ({ navigation }) => {

  const [errormsg, setErrormsg] = useState(null);
  // let [fontsLoaded] = useFonts({
  //   WorkSans_400Regular,
  //   Nunito_700Bold,
  // });

  // if (!fontsLoaded) {
  //   <AppLoading />;
  // }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Plzz fill all the fields");
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }
  };

  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
})

  const Sendtobackend = () => {
    // console.log(fdata);
    if (fdata.name == '' ||
        fdata.email == '' ||
        fdata.phone == '' ||
        fdata.message == '') {
        setErrormsg('All fields are required');
        return;
    }
    else {
        if (fdata.password != fdata.cpassword) {
            setErrormsg('Password and Confirm Password must be same');
            return;
        }
        else {
            fetch(`http://${IPPORT}:3000/api/contactus`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
            .then(res => res.json()).then(
                fdata => {
                    // console.log(data);
                    if (fdata.error) {
                        setErrormsg(fdata.error);
                    }
                    else {
                        alert('Data send  successfully');

                        navigation.navigate('Homescreen');
                    }
                }
            )
        }
    }

}

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your knowledge </Text>

      <Text style={styles.description}>
        You can reach us anytime via 
      </Text>
      {
                        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                    }
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Enter Name"}
          // value={name}
          onChangeText={(text) => setFdata({ ...fdata, name: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Email"}
          // value={email}
          onChangeText={(text) => setFdata({ ...fdata, email: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your mobile </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Number"}
          // value={phone}
          onChangeText={(text) => setFdata({ ...fdata, phone: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> How can we help you? </Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={"Tell us about your self"}
          // value={message}
          onChangeText={(text) => setFdata({ ...fdata, message: text })}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/* checkbox  */}

      <View style={styles.wrapper}>
        {/* <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        /> */}
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      {/* submit button  */}

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        // disabled={!agree}
        onPress={() => {
          Sendtobackend();
      }}>
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 24,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    // fontFamily: "Nunito_700Bold",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    // fontFamily: "WorkSans_400Regular",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    // fontWeight: "bold",
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    // fontFamily: "WorkSans_400Regular",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    // fontFamily: "WorkSans_400Regular",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    // fontFamily: "WorkSans_400Regular",
  },
  errormessage: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 10,
},
});

export default Contactus;
