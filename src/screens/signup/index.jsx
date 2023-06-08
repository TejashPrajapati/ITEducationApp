import React,{useState,useEffect} from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { COLORS,SIZES } from '../../constants/theme';
import IPPORT from '../../IPPORT';

const SignUpScreen = ({ navigation }) => {

    const [fdata, setFdata] = useState({
        email: '',
        contact: '',
        password: '',
        cpassword:'',
       
    })

    const [errormsg, setErrormsg] = useState(null);

    const Sendtobackend = () => {
        // console.log(fdata);
        if (
            fdata.email == '' ||
            fdata.contact == '' ||
            fdata.password == '' ||
            fdata.cpassword == '' ) {
            setErrormsg('All fields are required');
            return;
        }
        else {
            if (fdata.password != fdata.cpassword) {
                setErrormsg('Password and Confirm Password must be same');
                return;
            }
            else {
                fetch(`http://${IPPORT}:3000/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(fdata)
                })
                    .then(res => res.json()).then(
                        data => {
                            // console.log(data);
                            if (data.error === 'Invalid Credentials') {
                                // alert('Invalid Credentials')
                                setErrormsg('Invalid Credentials')
                            }
                            else if (data.message === "Verification Code Sent to your Email") {
                                // console.log(data.udata);
                                alert(data.message);
                                navigation.navigate('verification', { userdata: data.udata })
                            }
                        }
                    )
            }
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
                        <Text style={styles.title}>Get Started</Text>
                        <Text style={styles.subtitle}>Sign up to continue</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <TextInput placeholder='Email' style={styles.textinput} placeholderTextColor={COLORS.white}
                         onChangeText={(text) => setFdata({ ...fdata, email: text })}
                        />
                        <TextInput placeholder='Contact Number' style={styles.textinput} placeholderTextColor={COLORS.white} 
                         onChangeText={(text) => setFdata({ ...fdata, contact: text })}
                        />
                        <TextInput placeholder='Password' style={styles.textinput} placeholderTextColor={COLORS.white} 
                         onChangeText={(text) => setFdata({ ...fdata, password: text })}
                        />
                        <TextInput placeholder='CPassword' style={styles.textinput} placeholderTextColor={COLORS.white} 
                         onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => Sendtobackend()}>
                            <View style={styles.button1}>
                                <Text style={styles.btnText}>SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
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
                                <Text style={styles.btnText}>Sign In with facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                            <Text style={styles.text}>Already have an account? | Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignUpScreen;

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
        marginTop: 10,
        fontWeight: '600',
        fontSize: SIZES.h5,
    },
    bottomContainer: {
        justifyContent: 'center',
        marginTop: 50,
    }
});
