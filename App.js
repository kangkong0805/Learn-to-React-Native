import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }} />{" "}
      {/* 부모 요소 flex 크기의 1배 */}
      <View style={{ flex: 2, backgroundColor: "teal" }} />{" "}
      {/* 부모 요소 flex 크기의 2배 */}
      <View style={{ flex: 3, backgroundColor: "orange" }} />{" "}
      {/* 부모 요소 flex 크기의 3배 */}
    </View>
  );
}
