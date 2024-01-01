import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";

const Splace = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Stack.Screen  options={{headerShown:false}}/>
      <LottieView
        autoPlay
        style={{
          width: "80%",
          maxWidth:400,
          height: 200,
        }}
        source={require("../../../assets/lotties/netflix.json")}
      />
    </View>
  );
};

export default Splace;

const styles = StyleSheet.create({});
