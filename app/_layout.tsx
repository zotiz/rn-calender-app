import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import FontProvider from "../providers/FontProvider";
const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FontProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Devember" }} />
        </Stack>
      </FontProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
