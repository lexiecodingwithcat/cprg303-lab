import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import ToDoFrom from "./ToDoFrom";

const ToDoList = ({ tasks }) => {
  return (
    <SafeAreaView>
      <ToDoFrom tasks={tasks} />
    </SafeAreaView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({});
