import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const [input, setInput] = useState('')
    const [password, setPassword] = useState('')
    console.log(input)

    const navigation = useNavigation();

   
    const [fdata, setFdata] = useState({
        email: '',
        password: ''
    })

    const [errormsg, setErrormsg] = useState(null);

    const Sendtobackend = () => {
        // console.log(fdata);
        if (fdata.email == '' || fdata.password == '') {
            setErrormsg('All fields are required');
            return;
        }
        else {
            fetch(`http://${IPPORT}:3000/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then(res => res.json()).then(
                    data => {
                        // console.log(data);
                        if (data.error) {
                            setErrormsg(data.error);
                        }
                        else {
                            alert('logged successfully');
                            navigation.navigate('Homescreen');
                        }
                    }
                )
        }
    }

    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/student.jpeg')}
                blurRadius={7}
                style={{
                    flex: 1
            
                }}
                resizeMode= "cover"
            >
                <ScrollView>
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>Welcome </Text>
                        <Text style={styles.subtitle}>Sign into continue</Text>
                    </View>
                    <View style={styles.dataContainer} >
                        <TextInput placeholder='Username' style={styles.textinput} placeholderTextColor={COLORS.white}   onChangeText={(text) => setFdata({ ...fdata, email: text })} />
                        <TextInput placeholder='Password' style={styles.textinput} placeholderTextColor={COLORS.white}   onChangeText={(text) => setFdata({ ...fdata, password: text })} />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('main')}>
                            <View style={styles.button1}>
                                <Text style={styles.btnText}  onPress={() => Sendtobackend()}>SIGN IN</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Homescreen")}>
                            <View style={styles.button2}>
                                <View style={styles.logo}>
                                    {/* <Image source={require('../../assets/facebook.png')} 
                                        resizeMode="contain"   
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    /> */}
                                </View>
                                <Text style={styles.btnText}>Connect with facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('forgotpwd')}>
                            <Text style={{marginLeft: 220}}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.text}>Don't have an account? | Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h1 * 1.5
    },
    subtitle: {
        color: COLORS.white,
        fontSize: SIZES.h4,
        paddingTop: 3,
    },
    dataContainer: {
        marginTop: 50,
    },
    textinput: {
        color: COLORS.white,
        fontSize: SIZES.h3,
        borderBottomColor: COLORS.lightGrey,
        borderBottomWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 5,
    },
    btnContainer: {
        marginTop: 50,
    },
    button1: {
        backgroundColor: COLORS.primay,
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    btnText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h4,
    },
    button2: {
        flexDirection: 'row',
        backgroundColor: COLORS.blue,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginRight: 10,
    },
    text: {
        color: COLORS.white,
        textAlign: 'center',
        marginTop: 0,
        fontWeight: '600',
        fontSize: SIZES.h5,
    },
    bottomContainer: {
        justifyContent: 'center',
        marginTop: 50,
        // backgroundColor: "#000",
        // marginHorizontal:110,
        // marginVertical:10,
        // alignItems:"center",
        // borderRadius: 10,
        // padding:5
    }
});