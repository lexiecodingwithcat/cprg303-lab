import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

const Index = () => {
  const navigator = new useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/register" style={styles.text}>
        Go to register
      </Link>
      <Link href="/login" style={styles.text}>
        Go to Log in
      </Link>
      {/* <Link href="/tabs" style={styles.text}>
        GO TO TABS
      </Link> */}
      <TouchableOpacity onPress={() => navigator.navigate("(tabs)")}>
        <Text style={styles.text}>TABS</Text>
      </TouchableOpacity>
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
