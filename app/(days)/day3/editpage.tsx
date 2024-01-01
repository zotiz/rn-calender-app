import MarkdownDisplay from "../../components/MarkdownDisplay";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// const copy = `
// # Sample Markdown Content

// ## Introduction

// Markdown is a lightweight markup language that is easy to read and write. It provides a simple syntax for formatting text.

// ## Text Formatting

// You can _italicize_, **bold**, or ~~strike through~~ text easily.

// ## Lists

// ### Ordered List
// 1. Item 1
// 2. Item 2
// 3. Item 3

// ### Unordered List
// - Bullet 1
// - Bullet 2
// - Bullet 3

// ## Sample Table

// | Column 1 Header | Column 2 Header | Column 3 Header |
// | --------------- | --------------- | --------------- |
// | Row 1, Col 1    | Row 1, Col 2    | Row 1, Col 3    |
// | Row 2, Col 1    | Row 2, Col 2    | Row 2, Col 3    |
// | Row 3, Col 1    | Row 3, Col 2    | Row 3, Col 3    |

// ## Images

// ![Sample Image 1](https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg)

// ![Sample Image 2](https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg "Image with a title")

// ## Links

// [Visit our website](https://example.com)

// ## Code Block

// javascript
// const greeting = "Hello, Markdown!";
// console.log(greeting);

// `;

const EditPage = () => {
  const [edit, setEdit] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      {/* <ScrollView style={{backgroundColor:'green'}}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      > */}
      <Stack.Screen options={{ title: "Edit Page", headerBackTitleVisible:false }} />
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          paddingVertical: 10,
          marginVertical: 10,
        }}
      >
        <Pressable
          style={{
            flex: 1,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#89898999",
            padding: 6,
            borderRadius: 6,
            backgroundColor: edit === true ? "gray" : "white",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}
          onPress={() => setEdit(true)}
        >
          <Text
            style={{ fontSize: 16, color: edit == true ? "white" : "black" }}
          >
            Edit
          </Text>
        </Pressable>

        <Pressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#89898999",
            padding: 6,
            borderRadius: 6,
            backgroundColor: edit !== true ? "gray" : "white",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}
          onPress={() => setEdit(false)}
        >
          <Text
            style={{ fontSize: 16, color: edit !== true ? "white" : "black" }}
          >
            Preview
          </Text>
        </Pressable>
      </View>
      {edit ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <View>
            <TextInput
              autoFocus
              value={inputValue}
              multiline
              placeholder="Edit the markdown text..."
              style={{ fontSize: 20, backgroundColor: "white" }}
              onChangeText={(text) => setInputValue(text)}
            />
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}
        >
          <MarkdownDisplay>{inputValue}</MarkdownDisplay>
        </ScrollView>
      )}
    </View>
  );
};

export default EditPage;
