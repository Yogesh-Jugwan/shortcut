import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Button
        title="Go to WhatsApp"
        onPress={() => navigation.navigate('whatsapp')}
      />
    </View>
  )
}

export default Home