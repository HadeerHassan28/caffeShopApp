import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/theme';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCartProps {
  id: string;
  index: number;
  type: string;
  rosted: string;
  imagelink_square: string;
  name: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}
const CoffeeCart: React.FC<CoffeeCartProps> = ({
  id,
  index,
  type,
  rosted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground source={imagelink_square}></ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({CardLinearGradientContainer: {}});
export default CoffeeCart;
