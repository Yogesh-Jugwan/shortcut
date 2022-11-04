import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PrvNumber = () => {
  return (
    <View style={style.container}>
      <Text>SaveNumber</Text>
    </View>
  )
}

export default PrvNumber

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})