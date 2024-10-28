import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-web";
import ToDoList from "./ToDoList";
import { useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

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
