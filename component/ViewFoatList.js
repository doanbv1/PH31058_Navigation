import { View, Text } from 'react-native'
import React from 'react'

const ViewFoatList = ({sp}) => {
  return (
    <View style={{padding:10, borderWidth:1, borderRadius:20, marginBottom:10, backgroundColor:'pink'}}>
      <Text>{"ID: "+sp.id}</Text>
      <Text>{"Name: "+sp.name}</Text>
      <Text>{"Price: "+sp.price}</Text>
    </View>
  )
}

export default ViewFoatList