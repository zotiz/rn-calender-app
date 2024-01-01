import { StyleSheet, Text, View,Button } from "react-native";
import React, { useRef } from "react";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";

const Animation= () => {
   const animation = useRef<LottieView>(null)
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Lottie Animation",
          headerBackTitleVisible: false,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
          marginVertical: 10,
        }}
      >
        Lotties Animation
      </Text>
      <View style={{ alignItems: "center",gap:20 }}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../../assets/lotties/newyears.json")}
        />

        <LottieView
          ref={animation}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../../assets/lotties/netflix.json")}
        />
        <Button onPress={()=>animation?.current?.play()} title='play'/>
        <Button title='pause' onPress={()=>animation?.current?.pause()}/>
      </View>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({});
