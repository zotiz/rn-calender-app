import React from "react";
import { Link, Stack } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";
import MarkdownDisplay from "../../components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
  # Markdown
  Integrate markdown content in **React Native**

  📚 Today's Agendas:
  - Introductions of Markdown
  - Markdown syntex overview
  - Setting up react native for markdown
  - Implementing markdown rendering
  - Styling markdown content
  - Useing markdown in react-native components
  - Recap and Q&A sessions
`;
const Markdown = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day3 : Markdown" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={`/day3/editpage`} asChild>
        <Button title="Go to Editer page" />
      </Link>
    </SafeAreaView>
  );
};

export default Markdown;
