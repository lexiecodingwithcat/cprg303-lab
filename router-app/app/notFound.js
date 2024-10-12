import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const NotFound = () => {
  return (
    <View>
      <Text>Page Not Found</Text>
      <Link href="/">Go back to home screen</Link>
    </View>
  )
}

export default NotFound

const styles = StyleSheet.create({})