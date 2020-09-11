import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";

const data = require("../src/getRestaurantsAPI.json").response;

export default function Home({ navigation }) {
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Searchbar style={styles.search} placeholder="Search" />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.head}>{item.category}</Text>
              <FlatList
                style={styles.lineSep}
                horizontal
                data={item.restaurantList}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={styles.itemView}
                      onPress={() => {
                        navigation.navigate("Details", { item: item });
                      }}
                    >
                      <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.imageSize}
                      />
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.ratings}>
                        {item.rating} ★, {item.review} reviews
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  search: {
    borderRadius: 45,
    backgroundColor: "#C0C0C0",
  },
  lineSep: {
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 1,
  },
  head: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 5,
  },
  itemView: {
    margin: 10,
  },
  imageSize: {
    height: 170,
    width: 250,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  ratings: {
    color: "#5c5c5c",
    fontSize: 14,
  },
});
