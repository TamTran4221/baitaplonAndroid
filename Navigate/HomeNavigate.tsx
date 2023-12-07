import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Screens/Home';

const HomeNavigate = () => {
    const HomeStack = createNativeStackNavigator();

    return (
       <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home}/>
       </HomeStack.Navigator>
    );
};

export default HomeNavigate;