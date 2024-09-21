import { Image, StyleSheet, Text, View } from "react-native";
Image;

export default function Page() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image1}
        source={{
          uri: "https://images.pexels.com/photos/28201415/pexels-photo-28201415.jpeg",
        }}
      ></Image>
      <Text style={styles.headerText}>EVERY REACT NATIVE APP</Text>

      <View style={styles.childContainer}>
        <View style={styles.bubbleContainer}>
          <Text style={styles.innerText}>WE DID IT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  image1: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 100,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  childContainer: {
    marginVertical: 20,
  },
  bubbleContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
