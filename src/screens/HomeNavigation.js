import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/HomeScreen";
import Settings from "../components/Settings";
import ItemDetailScreen from "../components/ItemDetailScreen";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
