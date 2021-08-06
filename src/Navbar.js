import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Black Hub</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: "25%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
