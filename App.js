import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-web";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityContent}>Seoul</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.weather} // ScrollView style 부여
        horizontal // 수평 스크롤
        pagingEnabled // 수평 스크롤할 때 자식 요소 배수에서 스크롤 뷰가 중지
        showsVerticalScrollIndicator={false} // 스크롤 바 안 보이게
      >
        <View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
        <View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
        <View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
        <View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
      </ScrollView>
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
  day: {
    flex: 1,
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  temp: {
    fontSize: "180px",
  },
  description: {
    fontSize: "55px",
    marginTop: "-30px",
  },
});
