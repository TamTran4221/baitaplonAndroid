import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome'

const Home =()=>{
    return (
        <SafeAreaView style={style.container}>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <TextInput style={style.input}>Search</TextInput>
             <Icon name='filter' color={'#EDEDED'} size={20} style={{padding:15, backgroundColor: '#704F38', borderRadius: 50, width: 50, height: 50}}></Icon>
        </View>
        <View>

        </View>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding:30
    },

    input:{
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#fff',
        borderColor: '#797979',
        width:290
    },
    icon:{

    }
})
export default Home;