import React, { useState, useContext } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const { login, googleLogin } = useContext(AuthContext);

  const onPressLogin = () => {
    setEmail(email.trim());
    setPassword(password.trim());
    if (checkPassword() && validateEmail()) {
      login(email, password);
      setPassword("");
      setEmail("");
    } else if (!email || !password) {
      Alert.alert("Email and password cannot to be empty");
    } else if (!checkPassword()) {
      Alert.alert("Incorrect password");
    } else if (!validateEmail()) {
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
        maxLength={30}
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
      <TouchableOpacity onPress={() => googleLogin()} activeOpacity={0.8}>
        <Image
          style={styles.google_img}
          source={require("./../images/sign_in_google.png")}
        />
      </TouchableOpacity>
      <Text style={styles.footer}>by Dersu</Text>
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
  footer: {
    marginTop: "90%",
    marginStart: "80%",
  },
});
