import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityContent}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <Text style={styles.temperature}>27</Text>
        <Text style={styles.condition}>Sunny</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityContent: {
    fontSize: "70px",
  },
  weather: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-150px",
  },
  temperature: {
    fontSize: "180px",
  },
  condition: {
    fontSize: "55px",
    marginTop: "-30px",
  },
});
