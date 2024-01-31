import { View, Text, Image } from 'react-native'
import React from 'react'

const Wellcome = ({navigation}) => {

    setTimeout(() => {
            navigation.navigate('Login')
    },3000);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width:'40%', height: '20%', borderRadius:20 }}
                    source={require('../img/logocf.png')}
                />

                <Text style={{ marginTop:'20%', fontSize:20}} >
                    Họ và tên: Bùi Văn Đoàn
                </Text>
                <Text style={{fontSize:20}}>
                    MSV: PH31058
                </Text>
                <Text style={{fontSize:20}}>
                    Lớp: MD18305
                </Text>
            </View>
        </View>
    )
}

export default Wellcome