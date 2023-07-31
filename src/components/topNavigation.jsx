import { usePathname } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setRootBottomSheet } from "../../store/reducer.js";

export default function TopNavigation() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  function openBottomSheet() {
    dispatch(setRootBottomSheet());
  }

  return (
    <View
      style={pathname !== "/map" ? styles.container : styles.containerMapPage}
    >
      <View style={styles.content}>
        <Text style={styles.logo}>BMM LITER.mobile</Text>
        <Pressable onPress={openBottomSheet}>
          <FontAwesome5 name="bars" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f5f5f5",
  },
  containerMapPage: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f5f5f5",
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    color: "#666",
    fontSize: 20,
    fontWeight: "bold",
  },
});
