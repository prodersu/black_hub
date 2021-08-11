import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FeedPage } from "../screens/FeedPage";
import { ProfilePage } from "../screens/ProfilePage";
import { StyleSheet } from "react-native";
import { Vibrators } from "../screens/Vibrators";

const Tab = createMaterialTopTabNavigator();

const AppTabs = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: styles.indicator,
          tabBarStyle: styles.tabs,
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedPage}
          options={{ tabBarLabel: "Feed" }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{ tabBarLabel: "Profile" }}
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

export default AppTabs;
