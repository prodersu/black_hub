import { black } from "ansi-colors";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

export const Login = (props) => {
  const onPressRegister = () => {
    Alert.alert("Register Page is not ready yet!");
  };

  const onPressGoogle = () => {
    Alert.alert("Sign in with Google is comig soon!");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressLogin = () => {
    setEmail(email.trim());
    setPassword(password.trim());
    if (!email || !password) {
      Alert.alert("Email and password cannot to be empty");
    }
    if (checkPassword() && validateEmail()) {
      Alert.alert(email + "   " + password);
      const userData = { email, password };
      setPassword("");
      setEmail("");
    }
    if (!checkPassword()) {
      Alert.alert("Incorrect password");
    }
    if (!validateEmail()) {
      Alert.alert("Incorrect email address");
    }
  };

  return (
    <View style={styles.block}>
      <View style={styles.tabs}>
        <View>
          <Text style={styles.text_1}>Sign in</Text>
        </View>
        <TouchableOpacity onPress={onPressRegister}>
          <View>
            <Text style={styles.text_2}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      ></TextInput>
      <Button title="Log in" onPress={onPressLogin}></Button>
      <TouchableOpacity onPress={onPressGoogle}>
        <Image
          style={styles.google_img}
          source={{
            uri: "https://www.oncrashreboot.com/images/create-apple-google-signin-buttons-quick-dirty-way-google.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );

  function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  function checkPassword() {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (password.match(passw)) {
      return true;
    } else {
      return false;
    }
  }
};

const styles = StyleSheet.create({
  block: {
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  input: {
    fontSize: 20,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    marginBottom: 25,
    backgroundColor: "ghostwhite",
    padding: 5,
    borderRadius: 5,
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  text_1: {
    fontSize: 23,
    borderRightWidth: 2,
    borderRightColor: "black",
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  text_2: {
    fontSize: 21,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  google_img: {
    height: 40,
    width: "100%",
    borderWidth: 2,
    borderColor: "dodgerblue",
    marginTop: 25,
  },
});
