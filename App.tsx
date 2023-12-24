import React from "react";
import Tabs from "./src/Navigate/tab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/Screens/SignIn";
import SignUp from "./src/Screens/SignUp";


const App = () => {
  const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
          <Tabs/>
    </NavigationContainer>
  )
}
export default App;