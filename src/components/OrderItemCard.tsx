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

interface OrderItemCardProps {
  imagelink_square: ImageProps;
  type: string;
  name: string;
  ItemPrice: string;
  special_ingredient: string;
  prices: any;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  imagelink_square,
  type,
  name,
  prices,
  ItemPrice,
  special_ingredient,
}) => {
  // console.log(' prices', prices);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.CardLinearGradient}>
      <View style={styles.CardInfoContainer}>
        {/* Image and Title*/}
        <View style={styles.CardImageInfoContainer}>
          <Image source={imagelink_square} style={styles.CardImage} />
          {/* Title */}
          <View>
            <Text style={styles.CardTitle}>{name}</Text>
            <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.CardCurrency}>
            $ <Text style={styles.CardPrice}>{ItemPrice}</Text>
          </Text>
        </View>
      </View>
      {/* Prices */}
      {prices.map((data: any, index: any) => (
        <View key={index} style={styles.CardTableRow}>
          <View style={styles.CardTableRow}>
            {/* Size */}
            <View style={styles.SizeBoxLeft}>
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
            {/* Price */}
            <View style={styles.PriceBoxRight}>
              <Text style={styles.PriceCurrency}>
                {data.currency} <Text style={styles.Price}> {data.price}</Text>
              </Text>
            </View>
            {/* quantity */}
            <View style={styles.CardTableRow}>
              <Text style={styles.CardQantityPriceText}>
                X <Text style={styles.Price}>{data.quantity}</Text>
              </Text>
            </View>
            {/* Total Price */}
            <View style={styles.CardTableRow}>
              <Text style={styles.CardQantityPriceText}>
                $ {(data.quantity * data.price).toFixed(2).toString()}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradient: {
    gap: SPACING.space_20,
    padding: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardImageInfoContainer: {
    flexDirection: 'row',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  CardImage: {
    height: 90,
    width: 90,
    borderRadius: BORDERRADIUS.radius_15,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CardSubTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CardCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryOrangeHex,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
  CardTableRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SizeBoxLeft: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopLeftRadius: BORDERRADIUS.radius_10,
    borderBottomLeftRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.primaryGreyHex,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  PriceBoxRight: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopRightRadius: BORDERRADIUS.radius_10,
    borderBottomRightRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: COLORS.primaryGreyHex,
  },
  PriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  Price: {color: COLORS.primaryWhiteHex},
  CardQantityPriceText: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});
export default OrderItemCard;
