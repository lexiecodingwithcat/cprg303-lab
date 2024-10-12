import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logInBox}>
        <Text>Log in</Text>
        <View>
          <TextInput placeholder="Enter your email" />
          <TextInput placeholder="Enter your password" />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  logInBox: {
    backgroundColor: "white",
    height: 400,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 40,
  },
  insideBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
