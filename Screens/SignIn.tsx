import { Link } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

const SignIn = () => {


    return (
        <SafeAreaView style={style.container}>
            <View style={style.title}>
                <Text style={{ fontSize: 30, fontWeight: '700', color: '#1F2029',marginTop: 50 }}>Sign In</Text>
                <Text style={{ fontSize: 18 }}>Hi! Welcome back, your've been missed</Text>
            </View>
            <View style={{ marginTop: 50, marginBottom: 30 }}>
                <View>
                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#1f2029' }}>Email</Text>
                    <TextInput placeholder='example@gmail.com' style={style.input}></TextInput>
                </View>
                <View>
                    <Text style={{ marginTop: 20, fontWeight: '400', fontSize: 14, color: '#1f2029' }}>Password</Text>
                    <TextInput placeholder='enterpassword' secureTextEntry={true} style={style.input}></TextInput>
                </View>

            </View>
            <TouchableOpacity style={style.btn}>
                <Text style={{ fontSize: 20, fontWeight: '400', color: '#EDEDED' }}>Sign In</Text>
            </TouchableOpacity>
            <View>
                <Text style={{margin: 50, textAlign: 'center'}}> Or sign in with </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                <Icon name='apple' size={30} color='black' style={{borderWidth: 1,padding:20, width: 70, height: 70, borderRadius: 50, textAlign:'center',borderColor: '#797979' }}></Icon>
                <Icon name='google'size={30} style={{borderWidth: 1,padding:20, width: 70, height: 70, borderRadius: 50, textAlign:'center',borderColor: '#797979' }}></Icon>
                <Icon name='facebook'size={30} color="#3b5998" style={{borderWidth: 1,padding:20, width: 70, height: 70, borderRadius: 50, textAlign:'center', borderColor: '#797979' }}></Icon>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'center', margin: 45 }}>
                <Text style={{paddingRight:5}}>Don't have account?</Text>
                <Link to={{ screen: 'SignUp' }}style={{textDecorationLine: 'underline'}}>Sign Up</Link>
            </View>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        
    },
    title: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#fff',
        borderColor: 'gray',
        paddingLeft: 35,
        marginTop: 10
    },
    icon: {
        fontSize: 20,
        position: 'absolute',
        top: 65,

    },
    btn: {
        marginTop: 30,
        backgroundColor: '#704F38',
        paddingVertical: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 50,
        
    }

})

export default SignIn;