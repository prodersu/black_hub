import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./Login";
import { Register } from "./Register";
import { StyleSheet } from "react-native";
import { Vibrators } from "./Vibrators";

const Tab = createMaterialTopTabNavigator();

export const LoginTabs = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: styles.indicator,
          tabBarStyle: styles.tabs,
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ tabBarLabel: "Sign in" }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{ tabBarLabel: "Register" }}
        />
        <Tab.Screen
          name="Vibrators"
          component={Vibrators}
          options={{ tabBarLabel: "Vibrators" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 22,
    fontFamily: "sans-serif",
    textTransform: "capitalize",
  },
  indicator: {
    backgroundColor: "black",
  },
  tabs: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    elevation: 0,
  },
});
