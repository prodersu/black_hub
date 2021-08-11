import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "./AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import AppTabs from "./AppTabs";
import AuthTabs from "./AuthTabs";

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
      {user ? <AppTabs /> : <AuthTabs />}
    </NavigationContainer>
  );
};

export default Routes;
