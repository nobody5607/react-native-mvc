import { Button, SafeAreaView, Text, View } from 'react-native';
import React from 'react';

export type Props = {
  navigation?: any;
};
const CategoryScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>CategoryScreen</Text>

        <Button
          title="Go to Details"
          onPress={() => navigation.push('Product')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
