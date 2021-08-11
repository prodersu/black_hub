import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const AuthTabs = (props) => {
  return (
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
    </Tab.Navigator>
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

export default AuthTabs;
