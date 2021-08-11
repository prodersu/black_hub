import React from "react";
import { Button, View } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

export const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Text>Welcome {user.email}</Text>
      <Button title="Log out" onPress={() => logout()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
