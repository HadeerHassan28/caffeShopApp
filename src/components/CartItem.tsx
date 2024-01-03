import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface CartItemProps {
  id: string;
  name: string;
  roasted: string;
  special_ingredient: string;
  imagelink_square: ImageProps;
  prices: any;
  type: string;
  incrementCartItemQuantity: any;
  decrementCartItemQuantity: any;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  roasted,
  prices,
  type,
  special_ingredient,
  imagelink_square,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
}) => {
  // console.log(roasted, id);

  return (
    <View>
      {prices.length !== 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.CartItemLinearGrad}>
          <View style={styles.CartItemRow}>
            <Image source={imagelink_square} style={styles.CartItemImage} />
            <View style={styles.CartItemInfo}>
              <View>
                <Text style={styles.CartItemTitle}>{name}</Text>
                <Text style={styles.CartItemSubTitle}>
                  {special_ingredient}
                </Text>
              </View>
              <View style={styles.CartItemRoastedContainer}>
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
          {prices.map((data: any, index: any) => (
            <View style={styles.CartItemSizeContaimer} key={index}>
              <View style={styles.CartItemSizeValuesContainer}>
                <View style={styles.SizeBox}>
                  <Text
                    style={[
                      styles.SizeText,
                      {
                        fontSize:
                          type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                      },
                    ]}>
                    {data.size}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <></>
        // <LinearGradient
        //   start={{x: 0, y: 0}}
        //   end={{x: 1, y: 1}}
        //   colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        //   style={styles.CartItemLinearGrad}>
        //   <View style={styles.CartItemRow}>
        //     <Image source={imagelink_square} style={styles.CartItemImage} />
        //     <View style={styles.CartItemInfo}>
        //       <View>
        //         <Text>{name}</Text>
        //         <Text>{name}</Text>
        //       </View>
        //     </View>
        //   </View>
        // </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  CartItemLinearGrad: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemRow: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING.space_12,
  },
  CartItemImage: {
    height: 130,
    width: 130,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CartItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
  },
  CartItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSubTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryLightGreyHex,
  },
  CartItemRoastedContainer: {
    height: 50,
    width: 50 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryGreyHex,
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSizeContaimer: {
    flex: 1,
    justifyContent: 'center',
    gap: SPACING.space_20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  CartItemSizeValuesContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 100,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryLightGreyHex,
  },
});
export default CartItem;
