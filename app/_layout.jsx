import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme, Text, StatusBar } from "react-native";
import { usePathname, Tabs, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "../store/store.js";

// Components
import TopNavigation from "../src/components/topNavigation.jsx";
import RootBottomSheet from "../src/components/rootBottomSheet.jsx";

export default function Layouts() {
  const App = () => {
    const colorScheme = useColorScheme();
    const pathname = usePathname();

    const TabsNavigation = () => {
      return (
        <Tabs
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: ({ focused }) => {
                if (focused) {
                  return <Text>Home</Text>;
                }
                return "";
              },
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="home"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="(tabs)/map"
            options={{
              tabBarLabel: ({ focused }) => {
                if (focused) {
                  return <Text>Map</Text>;
                }
                return "";
              },
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="map"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="(tabs)/settings"
            options={{
              tabBarLabel: ({ focused }) => {
                if (focused) {
                  return <Text>Settings</Text>;
                }
                return "";
              },
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="ios-settings-sharp"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              ),
            }}
          />
        </Tabs>
      );
    };

    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaView>
          {pathname !== "/map" ? <TopNavigation /> : null}
          <RootBottomSheet />
        </SafeAreaView>
        <TabsNavigation />
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  };

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
