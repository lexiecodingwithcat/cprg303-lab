import { View, StyleSheet } from "react-native";
import CustomState from "./components/customState";
export default function Page() {
  return (
    <View style={styles.container}>
      <CustomState />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
