import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'
import ViewFoatList from './ViewFoatList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'




const listProduct = [
  {
    id: 1,
    name: 'Do an',
    price: 1000
  },
  {
    id: 2,
    name: 'Do uong',
    price: 2000
  },
  {
    id: 3,
    name: 'Do bot',
    price: 3000
  },
  {
    id: 4,
    name: 'Do bot',
    price: 3000
  }
]
const Home = ({ navigation}) => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ width: '100%', height: '8%', justifyContent: 'center' }}>
        <Image
          style={{ width: 35, height: 35 }}
          source={require('../img/ic_grid.png')}
        />
      </View>
      <View style={{ width: '100%', height: '80%' }}>

        <FlatList
          data={listProduct}
          renderItem={({ item }) => <ViewFoatList sp={item} />}
          keyExtractor={item => item.id}
        />

      </View>
      <View style={{ width: '100%', height: '10%' }}>
        <TouchableOpacity style={{ width: '20%', height: '100%', borderWidth: 1, borderRadius: 20, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, end: 0 }}

          onPress={() => navigation.navigate('Addproduct')}
        >
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
  
        
     

    </View>
  )
}

export default Home