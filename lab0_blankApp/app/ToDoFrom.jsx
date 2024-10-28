import { ScrollView, StyleSheet, View, TextInput, Button } from "react-native";
import React from "react";
import ToDoTask from "./ToDoTask";

const ToDoFrom = ({ tasks = [] }) => {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <ToDoTask key={task}>{task}</ToDoTask>
      ))}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Add a task..." />
        <Button title="Add" />
      </View>
    </ScrollView>
  );
};

export default ToDoFrom;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
