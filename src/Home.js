import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "../Components/styles";

const Home = (props) => {
  console.log("Home");
  return (
    <View
      style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Player"
        onPress={() => props.navigation.navigate("Player")}
      />
    </View>
  );
};

export default Home;
