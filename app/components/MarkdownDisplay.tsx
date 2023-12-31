import React from 'react'
import {View,StyleSheet} from 'react-native'
import Markdown from 'react-native-markdown-display'


const MarkdownDisplay = ({children}:{children:String}) => {
  return (
    <View>
      <Markdown style={styles}>{children}</Markdown>
    </View>
  )
}
const styles = StyleSheet.create({
  heading1: {
    fontWeight: "bold",
    color: "#343434",
  },
  heading2: {
    fontWeight: "bold",
    color: "#090909",
  },
  image: {
    borderWidth: 1,
  },
  body: {
    fontSize: 16,
  },
});
export default MarkdownDisplay
