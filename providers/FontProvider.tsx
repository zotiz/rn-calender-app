import React, { useEffect } from "react";
import {
  useFonts,
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { ActivityIndicator } from "react-native";
const FontProvider = ({ children }: any) => {
  const [fontLoaded, fontError] = useFonts({
    AmaticSc: AmaticSC_400Regular,
    AmaticScBold: AmaticSC_700Bold,
  });
  useEffect(() => {
    if (!fontLoaded && !fontError) {
      console.log("Fonts are not loaded!");
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded) {
    return null;
  }
  return children;
};

export default FontProvider;
