import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-web";
import React from "react";
import ToDoList from "../components/ToDoList";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask = function (newTask) {
    setTasks((tasks) => [...tasks, newTask]);
  };
  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>To Do List</Text>
        <ToDoList tasks={tasks} handleAddTask={addTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
