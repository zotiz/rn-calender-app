import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const DayOne = () => {
  return (
    <View style={Styles.container}>
     <Stack.Screen options={{title:'day1',
    headerStyle:{backgroundColor:'lightblue'},
    headerTintColor:'blue',
    headerBackTitle:'Home'}}/>
      <Text style={Styles.textStyle}>Day One</Text>
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
export default DayOne;
