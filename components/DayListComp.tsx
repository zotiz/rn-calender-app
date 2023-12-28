import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface dayType {
  day: number;
}
const DayListComp = ({ day }: dayType) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text
          style={{ fontSize: 65, color: "#5F0F40", fontFamily: "AmaticScBold" }}
        >
          {day}
        </Text>
      </Pressable>
    </Link>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: "#EEE7DA",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#232323",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 4,
    borderLeftWidth: 0.2,
    borderLeftColor: "#232323",
    borderTopWidth: 0.2,
    borderTopColor: "#232323",
  },
});
export default DayListComp;
