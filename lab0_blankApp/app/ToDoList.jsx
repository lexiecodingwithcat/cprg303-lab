import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import ToDoFrom from "./ToDoFrom";

const ToDoList = () => {
  return (
    <SafeAreaView>
      <ToDoFrom />
    </SafeAreaView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({});
