import React, { useContext, useState } from "react";
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
import DatePicker from "@dietime/react-native-date-picker";
import { AuthContext } from "../navigation/AuthProvider";

export const Register = (props) => {
  const { register, googleLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedNickname, setIsFocusedNickname] = useState(false);

  const onPressRegister = () => {
    setEmail(email.trim());
    setPassword(password.trim());
    if (checkPassword() && validateEmail() && nickname) {
      register(email, password);
      setPassword("");
      setEmail("");
      setNickname("");
    } else if (!email || !password || !nickname) {
      Alert.alert("All forms must be filled");
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
          setIsFocusedNickname(true);
        }}
        onBlur={() => {
          setIsFocusedNickname(false);
        }}
        style={isFocusedNickname ? styles.input_focused : styles.input}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
        maxLength={15}
      ></TextInput>
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
      <Button title="Register" onPress={onPressRegister} />
      <TouchableOpacity onPress={() => googleLogin()}>
        <Image
          style={styles.google_img}
          source={require("./../images/signupGoogle.png")}
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
    marginBottom: 20,
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
    height: 60,
    width: "100%",
    marginTop: 10,
    resizeMode: "stretch",
  },
  birth_text: {
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 80,
    marginTop: 20,
  },
});
