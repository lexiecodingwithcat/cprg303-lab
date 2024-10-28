import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
const User2 = () => {
  return (
    <View style={{ flex: "1", alignItems: "center", justifyContent: "center" }}>
      <Text>user 2</Text>
      <Link href="/chat/user1"> GO TO USER 1</Link>
    </View>
  );
};

export default User2;

const styles = StyleSheet.create({});
