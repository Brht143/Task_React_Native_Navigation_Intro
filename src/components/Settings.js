import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

function Settings(props) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings</Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

export default Settings;
