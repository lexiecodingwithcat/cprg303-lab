import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainLayout;
