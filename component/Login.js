import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { StyleSheet } from 'react-native'
import { Pressable } from 'react-native'

const Login = () => {

  const navigation = useNavigation();

  const [isVisible, setisVisible] = useState(false)
  const [userName, setuserName] = useState('')
  const [passWord, setpassWord] = useState('')
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Modal
            
          // de khong lap content cua view cha
          transparent={true}

          visible={isVisible}
        >
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
           
          }}>
            <View style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
            }}>
              <Text style={styles.modalText}>Tài khoản hặc mật khẩu không chính xác!!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setisVisible(!isVisible)}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }} > Close</Text>
            </Pressable>
          </View>

        </View>
      </Modal>
      <KeyboardAvoidingView>
        <TextInput
          style={{ width: 350, borderWidth: 1, borderRadius: 20, padding: 10 }}
          onChangeText={(value) => setuserName(value)}
          keyboardTypeType=''
          placeholder='userName'
        />
        <TextInput
          style={{ width: 350, borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 20 }}
          onChangeText={(valae) => setpassWord(valae)}
          placeholder='passWord'
          keyboardTypeType=''
        />
        <View style={{ width: 350, alignItems: 'center' }}>
          <TouchableOpacity style={{ width: 100, marginTop: 20, borderWidth: 1, borderRadius: 20, alignItems: 'center', backgroundColor: 'blue' }}

            onPress={() => {
              const name = 'Addmin';
              const pass = 'Addmin'
              if (userName !== name && passWord !== pass) {
                console.error('sai')
                setisVisible(!isVisible)
              } else {
                navigation.navigate('Home')
              }
            }}
          >
            <Text style={{ textAlign: 'center', padding: 10 }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </View >
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});

export default Login