import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

function ItemDetailScreen({ route }) {
  // const name = route.params.item.name;
  const { name, category, description, image, price, owner } =
    route.params.item;

  // console.log("name ", item);

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>name : {name}</Text>
      <Text>category: {category}</Text>
      <Text>description : {description}</Text>
      <Text>image : {image}</Text>
      <Text>price: {price}</Text>
      <Text>Owner: {owner}</Text>

      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

export default ItemDetailScreen;
