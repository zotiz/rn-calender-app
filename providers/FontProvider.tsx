import React, { useEffect } from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_300Light
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
  
} from "@expo-google-fonts/amatic-sc";
import {CourierPrime_400Regular,CourierPrime_400Regular_Italic} from "@expo-google-fonts/courier-prime";
const FontProvider = ({ children }: any) => {
  const [fontLoaded, fontError] = useFonts({
    AmaticSc: AmaticSC_400Regular,
    AmaticScBold: AmaticSC_700Bold,
    InterRegular:Inter_400Regular,
    InterBold:Inter_700Bold,
    InterExBold:Inter_800ExtraBold,
    InterLight:Inter_300Light,
    CourierPrimeItalic:CourierPrime_400Regular_Italic
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
