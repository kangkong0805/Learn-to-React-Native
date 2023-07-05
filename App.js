import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-web";
import { Fontisto } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);

  const API_KEY = "7163a59b0f4ce36adb14bf042e162569";

  // 날씨 아이콘
  const icons = {
    Clouds: "cloudy", // 흐림
    Clear: "day-sunny", // 맑음
    Atmophere: "cloudy-gusts", // 돌풍
    Snow: "snow", // 눈
    Drizzle: "rain", // 이슬비, 가랑비
    Rain: "rains", // 비
    ThunderStorm: "lightning", // 번개
  };

  const ask = async () => {
    // const { granted } = await Location.requestForegroundPermissionsAsync();
    // if (!granted) {
    //   setOk(false);
    // }
    const latitude = 35.1429503;
    const longitude = 126.8005143;

    // const {
    //   coords: { latitude, longitude },
    // } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    // const location = await Location.reverseGeocodeAsync(
    //   { latitude, longitude },
    //   { useGoogleMaps: false }
    // );
    // Location.setGoogleApiKey();

    // setCity(location[0].city);

    // 날씨 데이터 조회
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await res.json();
    setDays(json.list);
  };

  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityContent}>{city}</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.weather} // ScrollView style 부여
        horizontal // 수평 스크롤
        pagingEnabled // 수평 스크롤할 때 자식 요소 배수에서 스크롤 뷰가 중지
        showsVerticalScrollIndicator={false} // 스크롤 바 안 보이게
      >
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator color="white" size="large" />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.temp}>
                  {parseFloat(day.main.temp).toFixed(1)}
                </Text>
                <Fontisto
                  name={icons[day.weather[0].main]}
                  size={68}
                  color="white"
                />
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
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
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityContent: {
    fontSize: 58,
    fontWeight: 500,
    color: "white",
  },

  day: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
  },
  temp: {
    marginTop: 50,
    fontWeight: 600,
    fontSize: 100,
    color: "white",
  },
  description: {
    fontSize: 30,
    marginTop: -10,
    color: "white",
  },
  tinyText: {
    marginTop: -10,
    fontSize: 25,
    color: "white",
  },
});
