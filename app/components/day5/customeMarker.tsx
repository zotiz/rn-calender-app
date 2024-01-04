import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

const CustomeMarker = ({ apartment,setSelectedAprt }: any) => {
  return (
    <Marker
      onPress={()=>setSelectedAprt(apartment)}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
      title={apartment.title}
     
    >
     
        <View
          style={{
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "gray",
            paddingHorizontal: 5,
            paddingVertical: 2,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "600" }}>$ {apartment.price}</Text>
        </View>
   
    </Marker>
  );
};

export default CustomeMarker;

const styles = StyleSheet.create({});
