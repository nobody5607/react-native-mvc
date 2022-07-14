import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Octicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

import Tabs from './tabs';
import ProductScreen from '@screens/product/product.screen';
import DrawerItems from '@components/layouts/DrawerItems';
import HomeScreen from '@screens/home/home.screen';
import AccountScreen from '@screens/account/account.screen';

// import 'react-native-gesture-handler';

const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home"
    /*screenOptions={{
      headerShown: true,
      drawerActiveBackgroundColor: '#3BB77E',
      drawerActiveTintColor: '#fff',
      drawerLabelStyle: {
        marginLeft: -25,
        fontSize: 15,
        marginVertical: 2,
      },
    }}
   drawerContent={props => <DrawerItems {...props} />}*/
    >
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Account" component={AccountScreen} />
    </Drawer.Navigator>


  );
};

export default Main;
