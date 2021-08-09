import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

export const Login = (props) => {
  const onPressGoogle = () => {
    Alert.alert("Sign in with Google is coming soon!");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

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
      <TextInput
        onFocus={() => {
          setIsFocusedEmail(true);
        }}
        onBlur={() => {
          setIsFocusedEmail(false);
        }}
        style={isFocusedEmail ? styles.input_focused : styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        maxLength={20}
      ></TextInput>
      <TextInput
        onFocus={() => {
          setIsFocusedPassword(true);
        }}
        onBlur={() => {
          setIsFocusedPassword(false);
        }}
        style={isFocusedPassword ? styles.input_focused : styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        maxLength={20}
      ></TextInput>
      <Button title="Log in" onPress={onPressLogin} />
      <TouchableOpacity onPress={onPressGoogle} activeOpacity={0.8}>
        <Image
          style={styles.google_img}
          source={require("./images/sign_in_google.png")}
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
    backgroundColor: "white",
  },
  input: {
    fontSize: 20,
    marginBottom: 25,
    backgroundColor: "ghostwhite",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "ghostwhite",
  },
  input_focused: {
    fontSize: 20,
    marginBottom: 25,
    backgroundColor: "ghostwhite",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  google_img: {
    height: 70,
    width: "100%",
    marginTop: 25,
    resizeMode: "stretch",
  },
});
