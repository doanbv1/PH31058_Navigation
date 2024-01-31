import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Addproduct = () => {
  return (
    <View style={{flex:1, backgroundColor:'yellow', alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>
            Thêm Sản Phẩm
        </Text>
        
        {/* <TextInput style={{width:'100%', borderWidth:1, borderRadius:20, marginVertical:10}}/> */}

       
        {/* <TextInput style={{width:'100%', borderWidth:1, borderRadius:20, marginVertical:10}}>

        </TextInput>
        <TextInput style={{width:'100%', borderWidth:1, borderRadius:20, marginVertical:10}}>

        </TextInput>
        <TouchableOpacity>
            
        </TouchableOpacity> */}
    </View>
  )
}

export default Addproduct