import { BottomSheet } from "react-native-btr";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch  } from "react-redux";
import { setRootBottomSheet } from "../../store/reducer.js";

export default function RootBottomSheet() {
  const visible = useSelector((state) => state.index.rootBottomSheet);
  const dispatch = useDispatch();

  function hideBottomSheet() {
    dispatch(setRootBottomSheet());
  }

  return (
    <BottomSheet visible={visible} onBackdropPress={hideBottomSheet}>
      <View style={styles.bottomNavigationView}>
        <Text>Hello world!</Text>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
});
