import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ToDoTask = ({ children, completed }) => {
  return (
    <Pressable>
      <View style={[styles.task, completed ? styles.completed : null]}>
        <Text style={styles.taskText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default ToDoTask;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});
