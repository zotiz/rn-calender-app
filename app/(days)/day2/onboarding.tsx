import { Stack, router } from "expo-router";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  LightSpeedInRight,
  LightSpeedOutLeft,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";

const onboardingData = [
  {
    icon: "carrot",
    heading: "We're thrilled to have you on board! 🚀",
    description:
      "Get ready to explore a world of possibilities and make the most of your experience with Devember. Whether you re here to connect,learn, or create, we re here to help you every step of the way.",
  },
  {
    icon: "snowflake",
    heading: "Keep Coding, Dreamer, Make the World Brighter.🌟📱",
    description:
      "In the world of 1s and 0s, you weave magic with code, turning dreams into pixels and functionality into seamless experiences. Your dedication and passion illuminate the digital landscape, bringing innovation to the palm of our hands.",
  },
  {
    icon: "pagelines",
    heading: "Embark on a React Native Journey 👨🏽‍💻",
    description:
      "Welcome to the world of React Native, where innovation meets limitless possibilities! As you set out on this coding expedition, remember that you're not just building apps; you're crafting experiences, shaping ideas, and making a mark on the digital landscape.!!",
  },
];
const OnBoarding = () => {
  const [onBoard, setOnBoard] = useState(0);
  const onPressCountinue = () => {
    if (onBoard < 2) {
      setOnBoard(onBoard + 1);
    } else {
      setOnBoard(0);
      router.push("/day2/newonboarding");
    }
  };
  // const onBack = () => {
  //   onBoard > 0 ? setOnBoard(onBoard - 1) : setOnBoard(0);
  // };
  const data = onboardingData[onBoard];

  // Fling Gesture
  // const swipeRight = Gesture.Fling()
  //   .direction(Directions.RIGHT)
  //   .onEnd((event) => {
  //     onPressCountinue();
  //   });
  // const swipeLeft = Gesture.Fling()
  //   .direction(Directions.LEFT)
  //   .onEnd((event) => {
  //     onBack();
  //   });
  // const swiper = Gesture.Simultaneous(swipeLeft, swipeRight);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#38437A" }}>
      <View key={onBoard} style={Styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={Styles.stepIndicatorContainer}>
          {onboardingData.map((item, index) => (
            <View
              key={index}
              style={{
                height: 3,
                borderRadius: 20,
                flex: 1,
                backgroundColor: onBoard === index ? "#FFFFFF" : "gray",
              }}
            ></View>
          ))}
        </View>

        <View style={Styles.subContainer}>
          <FontAwesome5 name={data.icon} size={100} color="#DF511C" />
          <View style={{ gap: 12, alignItems: "center" }}>
            <Animated.View
              entering={LightSpeedInRight}
              exiting={LightSpeedOutLeft}
            >
              <Text style={Styles.textStyle}>{data.heading}</Text>
            </Animated.View>
            <Animated.View entering={FadeIn.delay(300)} exiting={FadeOut}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 19,
                  color: "#bcbcbc",
                  fontFamily: "InterLight",
                  paddingHorizontal: 4,
                  lineHeight: 26,
                }}
              >
                {data.description}
              </Text>
            </Animated.View>
          </View>
        </View>
      </View>

      <View style={{ padding: 18 }}>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => router.push("/(days)/day2/newonboarding")}
            style={{
              borderWidth: 0.5,
              borderColor: "#aaaaaa",
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "InterRegular",
                fontSize: 18,
                color: "white",
                textAlign: "right",
              }}
            >
              skip
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={onPressCountinue} style={Styles.btn}>
          <Text
            style={{
              fontFamily: "InterRegular",
              fontSize: 18,
              color: "white",
              textAlign: "center",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  textStyle: {
    fontSize: 33,
    color: "#FFFFFF",
    fontFamily: "InterExBold",
    letterSpacing: 2,
    textAlign: "center",
  },
  subContainer: {
    flex: 3,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },

  btn: {
    backgroundColor: "#596FB7",
    marginVertical: 30,
    padding: 13,
    borderRadius: 30,
    shadowColor: "#efefef",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  stepIndicatorContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    paddingHorizontal: 30,
  },
});
export default OnBoarding;
