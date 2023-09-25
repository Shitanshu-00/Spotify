import { View, Text, Button, Image } from "react-native";
import React from "react";
import { styles } from "../Components/styles";
import { SIZES } from "../Constants/Theme";

const Home = (props) => {
  console.log("Home");
  return <View style={styles.container}>
    <View style={styles.rowView}>
      <Text style={{fontSize:SIZES.xl}}>Good Evening</Text>
      {/* <Image source={} /> */}
    </View>
  </View>;
};

export default Home;
