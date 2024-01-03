import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const MapView = () => {
  return (
    <View>
      <Stack.Screen options={{title:'Day5 : MapView'}}/>
      <Text>MapView</Text>
      <Link href='/day5/mapViewPage' asChild>
       <Button title='Go to Map'/>
      </Link>
    </View>
  )
}

export default MapView

const styles = StyleSheet.create({})