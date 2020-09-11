import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { favicon } from "../assets/favicon.png";

export default function Details({ route }) {
  const { name, imageUrl, rating, review } = route.params.item;

  //   console.log(route.params.item.name)
  //   console.log(imageUrl)
  //   console.log(name)
  //   console.log(rating)
  //   console.log(review)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name} </Text>
      <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
      <Text style={styles.ratings}>Ratings: {rating} ★ </Text>
      <Text style={styles.ratings}>Reviews: {review}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  title: {
    margin: 16,
    fontWeight: "bold",
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#C0C0C0",
  },
  imageStyle: {
    height: 300,
    width: 350,
    borderRadius: 10,
  },
  ratings: {
    color: "#5c5c5c",
    fontSize: 18,
    margin: 8,
  },
});
