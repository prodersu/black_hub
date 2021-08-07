import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "./src/Login";
import { Navbar } from "./src/Navbar";

export default function App() {
  return (
    <View>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Navbar />
        <Login />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
