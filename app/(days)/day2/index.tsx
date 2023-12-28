import React from "react";
import { View, Text, StyleSheet } from "react-native";
const DayTwo = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Day Two</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 32,
    color: "#5F0F40",
  },
});
export default DayTwo;
