import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import FontProvider from "../providers/FontProvider";
import Animated, { FadeIn} from "react-native-reanimated";
const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FontProvider>
        <Animated.View style={{ flex: 1 }} entering={FadeIn.duration(500)}>
          <Stack>
            <Stack.Screen name="index" options={{ title: "Devember" }} />
          </Stack>
        </Animated.View>
      </FontProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
