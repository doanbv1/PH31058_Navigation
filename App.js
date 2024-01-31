import { View, Text, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Home from './component/Home';
import Wellcome from './component/Wellcome';
import Login from './component/Login';
import 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
import DrawerItemList from '@react-navigation/drawer';
import GioiThieu from './component/GioiThieu';
import Addproduct from './component/Addproduct';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const CustomDrawer = ({ props }) => {
  const nav = useNavigation();
  return (
    <DrawerContentScrollView {...props}>

      <View>
        <Image
          style={{ width: '90%', height: 200, alignItems: 'center', marginHorizontal: 10, borderRadius: 20 }}
          source={require('./img/logocf.png')}
        />
        <Text style={{ width: '100%', fontSize: 20, textAlign: 'center' }}>
          Bui Van Doan
        </Text>
      </View>

      <DrawerItem
        label={'Home'}
        onPress={() => nav.navigate('HomeSceen')}
      />
      <DrawerItem
        label={'Gioi Thieu'}
        onPress={() =>nav.navigate('GioiThieu')}
      />

    </DrawerContentScrollView>
  )
}
const HomeDrawe = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name='HomeSceen' component={Home} />
      <Drawer.Screen name='GioiThieu' component={GioiThieu} />
      <Drawer.Screen name='Add' component={Addproduct}/>
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer

    >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Wellcome'
      >
        <Stack.Screen name='Wellcome' component={Wellcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={HomeDrawe} />
        <Stack.Screen name='Addproduct' component={Addproduct}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App