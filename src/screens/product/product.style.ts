import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from 'themes/colors';
import fonts from 'themes/fonts';

const styles = StyleSheet.create({
  productCartLight: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 15,
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  productCartDark: {
    backgroundColor: Colors.darker,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 15,
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  containerImage: {
    width: scale(150),
    height: scale(150),
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
  },
  productNameTextDark: {
    fontSize: fonts.fontSize.font16,
    color: Colors.lighter,
    padding: 10,
  },
  productNameTextLight: {
    fontSize: fonts.fontSize.font16,
    color: Colors.darker,
    padding: 10,
  },
  productPrice: {
    color: colors.primary,
    fontSize: fonts.fontSize.font18,
    fontWeight: fonts.fontWeight.bold,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default styles;
