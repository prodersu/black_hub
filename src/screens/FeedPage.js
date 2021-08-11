import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const FeedPage = () => {
  return (
    <View style={styles.container}>
      <Text>Feed Page</Text>
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
