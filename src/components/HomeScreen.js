import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import categories from "../../data/categories";
import items from "../../data/items";

function HomeScreen(props) {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleCategoryPress = () => {
    // navigation.navigate("");
  };

  const categoriesView = categories.map((category) => {
    return (
      <View key={category._id} style={styles.categoryBox}>
        <TouchableOpacity onPress={() => handleCategoryPress(category.name)}>
          <Text style={styles.text}>{category.name}</Text>
        </TouchableOpacity>
      </View>
    );
  });

  const itemsView = items.map((item) => {
    return (
      <View key={item._id} style={styles.categoryBox}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ItemDetailScreen", { item: item })
          }
        >
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/v2/C4E0BAQGr4jMwOp7BBA/company-logo_200_200/company-logo_200_200/0/1631334009204?e=2147483647&v=beta&t=ab7yZVcQE-GQqGHx4Ymbb9jJh2VVfQ7ogsdAP2kCyH0",
            }}
          ></Image>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  });
  // console.log(itemsView);

  return (
    <>
      <View
        style={{
          flex: 0.25,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Text>Welcome</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="search1" size={18} color="black" />
          <TextInput
            style={styles.inputField}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            placeholder="Search"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
          borderBottomColor: "black",
          borderWidth: 2,
        }}
      >
        {categoriesView}
      </View>
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "column",

          borderBottomColor: "black",
          borderWidth: 2,
        }}
      >
        {itemsView}
      </ScrollView>
      <View>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A628A",
    height: "95%",
    top: "5%",
    flex: 1,
    // alignItems: "center",
    flexDirection: "column",
    // justifyContent: "space-between",
  },
  loginbox: {
    backgroundColor: "#4A628A",
    height: "95%",
    top: "5%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 100,
  },
  box1: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "#4A628A",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box2: {
    flex: 1,
    width: "100%",
    backgroundColor: "#7AB2D3",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
  },
  navBarBox: {
    flex: 1,
    width: "100%",
    backgroundColor: "#4A628A",
    borderColor: "#fff",
    borderBottomWidth: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  navBarItemBox: {
    flex: 2,
    width: "100%",
    backgroundColor: "#4A628A",
    borderColor: "#fff",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesBox: {
    flex: 1,
    width: "100%",
    backgroundColor: "#4A628A",
    borderColor: "#fff",
    // borderBottomWidth: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryBox: {
    flex: 2,
    width: "100%",
    backgroundColor: "#4A628A",
    borderColor: "#fff",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  itemBox: {
    backgroundColor: "#7AB2D3",
    marginBlock: 5,
    padding: 5,
    borderColor: "#7AB2D3",
    borderWidth: 1,
    borderRadius: 15,
    flex: 1,
    width: "90%",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
    marginInlineStart: "10",
    borderColor: "#DFF2EB",
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    color: "#DFF2EB",
    marginBlock: 5,
    fontFamily: "",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputField: {
    height: 40,
    width: 250,
    borderColor: "#DFF2EB",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingInline: 20,
    color: "#DFF2EB",
  },
  image: {
    // flex: 3,
    width: 60,
    height: 50,
    resizeMode: "stretch",
    marginInlineStart: "10",
    borderColor: "#DFF2EB",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default HomeScreen;
