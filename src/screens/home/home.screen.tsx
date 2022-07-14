import { Button, SafeAreaView, Text, View } from 'react-native';
import React from 'react';

export type Props = {
  navigation?: any;
};
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>

        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Product')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
