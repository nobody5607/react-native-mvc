import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import { View, Image, Text } from 'react-native';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from '@screens/category/category.screen';
import CartScreen from '@screens/cart/cart.screen';
import AccountScreen from '@screens/account/account.screen';
import HomeScreen from '@screens/home/home.screen';
import ProductScreen from '@screens/product/product.screen';

import styles from './style';

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="Home2"
      >
        <Tab.Screen
          name="Home2"
          component={StackScreen}
          options={({ route }) => ({
            tabBarStyle: { display: Visibility(route) },
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Image
                  source={require('@assets/bottom-tab/home.png')}
                  style={focused ? styles.imageFocus : styles.image}
                />
                <Text style={focused ? styles.textFocus : styles.text}>
                  หน้าแรก
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="CategoryTab"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Image
                  source={require('@assets/bottom-tab/category.png')}
                  style={focused ? styles.imageFocus : styles.image}
                />
                <Text style={focused ? styles.textFocus : styles.text}>
                  หมวดหมู่
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="cart"
          component={CartScreen}
          options={{
            tabBarBadge: 1,
            tabBarBadgeStyle: styles.tabBarBadgeStyle,
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Image
                  source={require('@assets/bottom-tab/cart.png')}
                  style={focused ? styles.imageFocus : styles.image}
                />
                <Text style={focused ? styles.textFocus : styles.text}>
                  ตะกร้าสินค้า
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            // tabBarBadge: 2,
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Image
                  source={require('@assets/bottom-tab/user.png')}
                  style={focused ? styles.imageFocus : styles.image}
                />
                <Text style={focused ? styles.textFocus : styles.text}>
                  บัญชี
                </Text>
              </View>
            ),
          }}
        />

      </Tab.Navigator>
    </>
  );
}


const StackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Product' component={ProductScreen} />
    </Stack.Navigator>
  );
};

const Visibility = (route: any) => {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (routeName === "Product") {
    return "none";
  }
  if (routeName === "Home") {
    return "flex";
  }
};