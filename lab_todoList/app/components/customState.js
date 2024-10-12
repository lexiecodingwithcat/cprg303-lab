import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
function CustomState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  function handleIncrease() {
    setCount((count) => count + 1);
  }
  function handleDecrease() {
    setCount((count) => count - 1);
  }
  function handleChangeName(newName) {
    setName(newName);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>name: {name}</Text>
      <TextInput
        value={name}
        onChangeText={handleChangeName}
        placeholder="Enter your name"
      />
      <Button title="+" onPress={handleIncrease}></Button>
      <Button title="-" onPress={handleDecrease}></Button>
    </View>
  );
}
export default CustomState;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "grey",
    width: "50%",
    height: "300px",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
