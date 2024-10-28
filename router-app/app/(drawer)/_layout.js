import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drawer from "expo-router/drawer";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ drawerPosition: "right" }}>
        <Drawer.Screen name="(tabs)" options={{ title: "Tabs" }} />
        <Drawer.Screen name="search" />
        <Drawer.Screen name="aboutMe" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;

const styles = StyleSheet.create({});
