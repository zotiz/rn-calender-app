import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import DayListComp from "./components/DayListComp";

const HomeScreen = () => {
  const days = [...Array(24)].map((item, index) => index + 1);
  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={{ gap: 18, padding: 13 }}
        numColumns={2}
        data={days}
        columnWrapperStyle={{ gap: 18 }}
        renderItem={({ item }) => <DayListComp day={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
