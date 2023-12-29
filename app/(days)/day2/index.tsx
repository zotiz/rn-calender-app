import { Link } from "expo-router";
import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const DayTwo = () => {
  return (
    <View style={Styles.container}>
      <Stack.Screen options={{ title: "day2 : Onboarding" }} />
      <Text style={Styles.textStyle}>Day Two</Text>
      <Link href={"/day2/onboarding"} asChild>
        <Button title="Go to Onboarding" />
      </Link>
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
