import React, { useEffect, useState, useContext } from "react";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "./AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import AppTabs from "./AppTabs";
import AuthTabs from "./AuthTabs";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      {user ? <AppTabs /> : <AuthTabs />}
    </NavigationContainer>
  );
};

export default Routes;
