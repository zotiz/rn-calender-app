import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_300Light,
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import {
  CourierPrime_400Regular,
  CourierPrime_400Regular_Italic,
} from "@expo-google-fonts/courier-prime";
import SplashAnimation from "../app/components/splashAnimation";

SplashScreen.preventAutoHideAsync();

const FontProvider = ({ children }: any) => {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinish, setSplashAnimationFinish] = useState(false)
  const [fontLoaded, fontError] = useFonts({
    AmaticSc: AmaticSC_400Regular,
    AmaticScBold: AmaticSC_700Bold,
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
    InterExBold: Inter_800ExtraBold,
    InterLight: Inter_300Light,
    CourierPrimeItalic: CourierPrime_400Regular_Italic,
  });
  useEffect(() => {
    if (fontLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontLoaded, fontError]);
 
  if (!fontLoaded) {
    return null;
  }
  if (!appReady || !splashAnimationFinish) {
    return <SplashAnimation animationFinished={
      (isCancelled)=>{
        if(!isCancelled){
          setSplashAnimationFinish(true)
        }
      }
    } />;
  }
  return children;
};

export default FontProvider;
