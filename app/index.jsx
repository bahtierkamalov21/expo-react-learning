import { StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";

// Components
import IndexHeader from "../src/components/index/indexHeader";

export default function Index() {
  return (
    <View style={styles.container}>
      <IndexHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
});
