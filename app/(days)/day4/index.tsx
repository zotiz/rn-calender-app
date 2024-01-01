import MarkdownDisplay from "../../../app/components/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

const template = `
## Splace Screen Animated
`;
const SplashScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day4 : Splash Screen" }} />

      <MarkdownDisplay>{template}</MarkdownDisplay>
      <Link href={"/day4/animation"} asChild>
        <Button title="Go to Lottie Animation" />
      </Link>

      <Link href={"/day4/splash"} asChild>
        <Button title="Go to Splash Screen" />
      </Link>
       
    </View>
  );
};

export default SplashScreen;
