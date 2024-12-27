import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, Image, StyleSheet } from "react-native";

function ItemDetailScreen({ route }) {
  const { name, category, description, image, price, owner } =
    route.params.item;

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.font}>name : {name}</Text>
      <Text style={styles.font}>category: {category}</Text>
      <Text style={styles.description}>description : {description}</Text>
      <Image style={styles.image} source={{ uri: image }}></Image>
      <Text style={styles.font}>price: {price}</Text>
      <Text style={styles.font}>Owner: {owner}</Text>

      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
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
    marginBlock: 20,
    fontSize: 20,
  },
  description: {
    color: "#DFF2EB",
    textAlign: "center",
  },
  image: { height: 180, width: 280, borderRadius: 10 },
});

export default ItemDetailScreen;
