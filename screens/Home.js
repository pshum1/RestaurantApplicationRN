import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { SearchBar } from "react-native-elements";

const data = require("../src/getRestaurantsAPI.json").response;

class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const { search } = this.state;

    return(
      <SearchBar placeholder="Search..."
      onChangeText={this.updateSearch}
      value={search}
      lightTheme = {true}
      round = {true}
      placeholderTextColor = "#FFF"
      containerStyle = {styles.search}
      inputContainerStyle = {styles.search}
      inputStyle = {styles.input}
      />
    )
  }
}



export default function Home({ navigation }) {
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Search style={styles.search}/>
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
  input:{
    color: "#5c5c5c"
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
