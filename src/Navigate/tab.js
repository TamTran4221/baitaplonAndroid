import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Cart from "../Screens/Cart";
import Message from "../Screens/Message";
import Profile from "../Screens/Profile";
import { Image, StyleSheet, Text, View } from "react-native";

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: '#1F2029',
            borderRadius: 50,
            height: 80,
            ...styles.shadow
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/icon/home.png')} resizeMode="contain" style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#704F38' : '#748c94'
            }}/>
            
          </View>
          )
        }} />
        <Tab.Screen name="Cart" component={Cart} options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/icon/home.png')} resizeMode="contain" style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94'
            }}/>
            
          </View>
          )
        }}  />
        <Tab.Screen name="Message" component={Message} options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/icon/home.png')} resizeMode="contain" style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94'
            }}/>
            
          </View>
          )
        }} />
        <Tab.Screen name="Profile" component={Profile}options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/icon/home.png')} resizeMode="contain" style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#704F38' : '#748c94'
            }}/>
           
          </View>
          )
        }} />
      </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
    }
  })

export default Tabs;