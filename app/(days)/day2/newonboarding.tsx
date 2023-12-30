import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
const NewOnBoarding = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "New Onboarding" }} />
      <Text>New On Boarding...</Text>
    </View>
  );
};

export default NewOnBoarding;
