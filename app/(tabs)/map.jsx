import { StyleSheet, Text, View, TextInput } from "react-native";
import { WebView } from "react-native-webview";
import { API_TOKEN_YAMAP } from "../../config.js";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

// Components
import TopNavigation from "../../src/components/topNavigation.jsx";

export default function Map() {
  const [center, setCenter] = useState("55.76, 37.64");
  const [routePoint, setRoutePoint] = useState("");
  const [myLocation, setMyLocation] = useState("Тараз");

  // useEffect(() => {
  //   getMyLocation();
  // }, []);

  // async function getMyLocation() {
  //   const { status } = await Location.requestForegroundPermissionsAsync();

  //   if (status !== "granted") {
  //     console.log("Permission to access location was denied");
  //     return;
  //   }

  //   const location = await Location.getCurrentPositionAsync({});
  //   setMyLocation(JSON.stringify(location));
  // }

  const yandexMapHtml = `
    <script src="https://api-maps.yandex.ru/2.1/?apikey=${API_TOKEN_YAMAP}&lang=ru_RU" type="text/javascript"></script>
    <div id="yandexMap" style="width: 100%; height: 100%"></div>
    <script>
      ymaps.ready(init);

      function init() {
        const centerCoords = [${center}].map(Number);
        const myMap = new ymaps.Map("yandexMap", {
          center: centerCoords,
          zoom: 10,
        });

        const routePoint = ${JSON.stringify(routePoint)};
        const myLocation = ${JSON.stringify(myLocation)};

        routePoint !== "" ? getRoutePoint() : null;

        function getRoutePoint() {
          const myRouter = ymaps.route(
            [
              myLocation, // Моё местоположение
              {
                // Транзитная точка
                type: "viaPoint",
                point: routePoint,
              },
            ],
            {
              mapStateAutoApply: true,
            }
          );
  
          myRouter.then(function (route) {
            // Добавление маршрута на карту
            myMap.geoObjects.add(route);
          });
        } 
      }
    </script>
  `;

  function setCenterYMap(center) {
    setCenter(center);
  }

  function setRoutePointYMap(point) {
    setRoutePoint(point);
  }

  return (
    <>
      <TopNavigation />
      <View style={{ marginVertical: 24, marginHorizontal: 24 }}>
        {/* <Text>Тест смены центра</Text>
        <TextInput
          value={center}
          onChangeText={(center) => setCenterYMap(center)}
        /> */}
        <Text>Тест геокодера по маршруту</Text>
        <TextInput 
          value={routePoint} 
          onChangeText={(point) => setRoutePointYMap(point)}
        />
      </View>
      <WebView source={{ html: yandexMapHtml }} style={styles.webview} />
    </>
  );
}

const styles = StyleSheet.create({
  webview: {
    height: "100%",
    width: "100%",
  },
});
