import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const User1 = () => {
  return (
    <View style={{ flex: "1", alignItems: "center", justifyContent: "center" }}>
      <Text>User 1</Text>
      <Link href="/chat/user2"> GO TO USER 2</Link>
    </View>
  );
};

export default User1;

const styles = StyleSheet.create({});
