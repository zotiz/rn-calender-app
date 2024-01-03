import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import MapView, { Marker } from "react-native-maps";
const MapViewPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Map", headerBackTitleVisible: false }} />
      <MapView
        initialRegion={{
          latitude: 32.83271,
          longitude: -97.07031,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Marker
          coordinate={{ latitude: 32.83271, longitude: -97.07031 }}
          title="Jyoti House"
        />
         
      
      </MapView>
    </View>
  );
};

export default MapViewPage;

const styles = StyleSheet.create({});
