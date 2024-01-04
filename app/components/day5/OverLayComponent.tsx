import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const OverLayComponent = ({ apartment }: any) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: apartment.image }} style={styles.img} />
      <View style={styles.content}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {apartment.title}
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          {/* {apartment.description.split(" ").slice(0, 9).join(" ") + "..."} */}
          {apartment.description &&
            apartment.description.split(" ").slice(0, 8).join(" ") + "..."}
        </Text>
        <View
          style={{
            marginTop: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            $ {apartment.price}
          </Text>
          <Text style={{ fontSize: 16 }}>
            &#9733; {apartment.starRating} ({Math.ceil(apartment.starRating)})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OverLayComponent;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 70,
    backgroundColor: "white",
    left: 10,
    right: 10,
    borderRadius: 8,
    shadowColor: "gray",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    flexDirection: "row",
    gap: 2,
    overflow: "hidden",
  },
  content: {
    padding: 10,
    flex: 1,
    gap: 4,
  },
  img: {
    width: 160,
    aspectRatio: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
