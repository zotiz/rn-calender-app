import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const SplashAnimation = ({
  animationFinished = (isCancelled) => {},
}: {
  animationFinished: (isCancelled: boolean) => void;
}) => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <LottieView
        onAnimationFinish={animationFinished}
        loop={false}
        autoPlay
        duration={3500}
        style={{
          width: "80%",
          height: 200,
          backgroundColor: "#000000",
        }}
        source={require("../../assets/lotties/netflix.json")}
      />
    </Animated.View>
  );
};

export default SplashAnimation;

const styles = StyleSheet.create({});
