import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontAwesome5 } from "@expo/vector-icons";

export default function IndexHeader() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/shapes/shapes-light.svg")}
      />
      <View style={styles.card}>
        <View style={styles.chipContainer}>
          <Text style={styles.chip}>Frontend Backend | Web Developers</Text>
        </View>
        <Text style={styles.title}>IT Разработка</Text>
        <Text style={styles.subtitle}>{"Современных\nПроектов"}</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <FontAwesome5 name="layer-group" size={24} color="white" />
            <Text style={styles.buttonText}>Получить консультацию</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        <Image
          style={styles.imageReact}
          source={{ uri: "https://reactjs.org/logo-og.png" }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: "100%",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
    top: 0,
    right: 0,
  },
  imageReact: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
  card: {
    paddingHorizontal: 18,
    alignItems: "baseline",
    paddingVertical: 18,
    borderRadius: 24,
    backgroundColor: "rgba(256, 256, 256, 0.6)",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  chipContainer: {
    backgroundColor: "#3f51b5",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  chip: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#1867c0",
    borderRadius: 28,
    marginTop: 24,
  },
  button: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 12,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
