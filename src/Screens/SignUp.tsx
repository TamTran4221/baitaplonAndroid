import { Link, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


const SignUp = () => {
    const navigation = useNavigation()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const onsubmit = () => {
        let formData = {
            email: email,
            password: password,
            name: name
        };
    
        axios.post('http://192.168.1.6:8000/api/register', formData)
            .then((response) => {
                console.log(response.data);
                navigation.navigate('SignIn');
            })
            .catch((error) => {
                console.error(error);
            });
    };
    

    return (
        <SafeAreaView style={style.container}>
            <View style={style.title}>
                <Text style={{ fontSize: 30, fontWeight: '700', color: '#1F2029' }}>Create Account</Text>
                <Text style={{ margin: 20, textAlign: 'center', fontSize: 18 }}>Fill your information below or register with your social account</Text>
            </View>
            <View>
                <View>
                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#1f2029', fontFamily: 'inter', marginTop: 30 }}>Name</Text>
                    <TextInput placeholder='Enter your name' style={style.input} onChangeText={(value)=>setName(value)}></TextInput>
                </View>
                <View>
                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#1f2029', marginTop: 20 }}>Email</Text>
                    <TextInput placeholder='example@gmail.com' style={style.input} onChangeText={(value)=>setEmail(value)}></TextInput>
                </View>
                <View>
                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#1f2029', marginTop: 20 }}>Password</Text>
                    <TextInput placeholder='Enter your password' style={style.input} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}></TextInput>
                    
                </View>
            </View>
            <TouchableOpacity style={style.btn} onPress={onsubmit}>
                <Text style={{ fontSize: 20, fontWeight: '400', color: '#EDEDED' }} >Sign Up</Text>
            </TouchableOpacity>
            <View>
                <Text style={{margin: 35, textAlign: 'center'}}> Or sign in with </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                <Icon name='apple' size={30} color='black' style={{borderWidth: 1,padding:20, width: 70, height: 70, borderRadius: 50, textAlign:'center',borderColor: '#797979' }}></Icon>
                <Icon name='google'size={30} style={{borderWidth: 1,padding:20, width: 70, height: 70, borderRadius: 50, textAlign:'center',borderColor: '#797979' }}></Icon>
                <Icon name='facebook'size={30} color="#3b5998" style={{borderWidth: 1,padding:20, width: 70, height: 70, borderRadius: 50, textAlign:'center', borderColor: '#797979' }}></Icon>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 35}}>
                <Text style={{paddingRight:5}}>Already have account?</Text>
                <Link to={{screen: 'SignIn'}} style={{textDecorationLine: 'underline'}}>Sign In</Link>
             </View>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20
    },
    title: {
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#fff',
        borderColor: 'gray',
        paddingLeft: 35,
        marginTop: 5
    },
    icon: {
        fontSize: 20,
        position: 'absolute',
        top: 65,
    },
    btn: {
        marginTop: 50,
        backgroundColor: '#704F38',
        paddingVertical: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 50
    }

})
export default SignUp;