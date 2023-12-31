import MarkdownDisplay from "../../components/MarkdownDisplay";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const copy = `# Markdown Example with Image

## Introduction
Markdown is a lightweight markup language that is easy to read and write. It allows you to format text using simple syntax.

## Text Formatting
You can *italicize*, **bold**, or ~~strike through~~ text easily.

## Lists
### Ordered List
1. Item 1
2. Item 2
3. Item 3

### Unordered List
- Bullet 1
- Bullet 2
- Bullet 3
![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
Like links, Images also have a footnote style syntax
[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## Sample Table

| Column 1 Header | Column 2 Header | Column 3 Header |
| --------------- | --------------- | --------------- |
| Row 1, Col 1    | Row 1, Col 2    | Row 1, Col 3    |
| Row 2, Col 1    | Row 2, Col 2    | Row 2, Col 3    |
| Row 3, Col 1    | Row 3, Col 2    | Row 3, Col 3    |

### Code Block

\`\`\` js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

fetchData();

\`\`\`

`;
const template = ` 
 # heading
`;

const EditPage = () => {
  const [edit, setEdit] = useState(true);
  const [inputValue, setInputValue] = useState("");
  console.log(edit);
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      {/* <ScrollView style={{backgroundColor:'green'}}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      > */}
      <Stack.Screen options={{ title: "Edit Page" }} />
      <View style={{ flexDirection: "row", gap: 20, paddingVertical: 10, marginVertical:10}}>
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
          <TextInput
            autoFocus
            value={edit ? inputValue : ""}
            multiline
            placeholder="Edit the markdown text..."
            style={{ fontSize: 20, backgroundColor: "white" }}
            onChangeText={(text) => setInputValue(text)}
          />
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

      {/*  */}
      {/* </ScrollView> */}
    </View>
  );
};

export default EditPage;
