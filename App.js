import { StyleSheet, Text, View } from "react-native";
import HomeNavigation from "./src/navigations/HomeNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A628A",
    color: "#DFF2EB",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    color: "#DFF2EB",
  },
});
