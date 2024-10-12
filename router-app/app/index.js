import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/register" style={styles.text}>
        Go to register
      </Link>
      <Link href="/login" style={styles.text}>
        Go to Log in
      </Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
