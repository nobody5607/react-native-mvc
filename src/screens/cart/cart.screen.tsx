import { Button, SafeAreaView, Text, View } from 'react-native';
import React from 'react';

export type Props = {
  navigation?: any;
};
const CartScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>CartScreen</Text>

        <Button
          title="Go to Details"
          onPress={() => navigation.push('Product')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
