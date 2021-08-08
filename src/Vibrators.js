import React from "react";
import { Button, View, Vibration, StyleSheet } from "react-native";

export const Vibrators = (props) => {
  return (
    <View>
     
      <Button
        title="Turn on Vibrator"
        color="red"
        onPress={() =>
          Vibration.vibrate([2 * 1000, 20 * 1000, 2 * 1000, 20 * 1000], true)
        }
      />
      
      <Button
        title="Vibrate with patterns"
        color="magenta"
        onPress={() =>
          Vibration.vibrate([1 * 1000, 2 * 1000, 3 * 1000, 4 * 1000], true)
        }
      />
      
      <Button
        title="Stop vibrating"
        onPress={() => Vibration.cancel()}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
