import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screen
import CategoryScreen from '@screens/category/category.screen';
import HomeScreen from '@screens/home/home.screen';
import ProductScreen from '@screens/product/product.screen';
import CartScreen from '@screens/cart/cart.screen';
import AccountScreen from '@screens/account/account.screen';
import Main from '@navigations/main';
import Tabs from '@navigations/tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   {/* <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }} />
    //     <Stack.Screen name="Product" component={ProductScreen} />
    //   </Stack.Navigator> */}

    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Category" component={CategoryScreen} />
    //     <Tab.Screen name="Cart" component={CartScreen} />
    //     <Tab.Screen name="Account" component={AccountScreen} />
    //   </Tab.Navigator>

    // </NavigationContainer>
    <AppStack />

  );
};

const AppStack = () => {

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};



export default App;
