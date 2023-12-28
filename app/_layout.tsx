import React from "react";

import { Stack } from "expo-router";
import FontProvider from "../providers/FontProvider";
const RootLayout = () => {
  return (
    <FontProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Devember" }} />
      </Stack>
    </FontProvider>
  );
};

export default RootLayout;
