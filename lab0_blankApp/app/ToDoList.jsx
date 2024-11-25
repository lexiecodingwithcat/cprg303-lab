import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import ToDoFrom from "./ToDoFrom";

const ToDoList = ({ tasks, handleAddTask }) => {
  return (
    <SafeAreaView>
      <ToDoFrom tasks={tasks} handleAddTask={handleAddTask} />
    </SafeAreaView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({});
