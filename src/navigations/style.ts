import {StyleSheet} from 'react-native';
import fonts from '@themes/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 10,
    tintColor: 'black',
  },
  imageFocus: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 10,
    tintColor: 'crimson',
  },
  text: {
    fontSize: fonts.fontSize.font8,
    color: 'black',
  },
  textFocus: {
    fontSize: fonts.fontSize.font8,
    color: 'crimson',
  },
  tabBarBadgeStyle: {
    // fontSize: fonts.fontSize.font10,
  },
});
export default styles;
