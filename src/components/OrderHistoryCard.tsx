import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import OrderItemCard from './OrderItemCard';
interface OrderHistoryCard {
  navigationHandler: any;
  OrderDate: any;
  CartListPrice: any;
  CartList: any;
}

const OrderHistoryCard: React.FC<OrderHistoryCard> = ({
  navigationHandler,
  OrderDate,
  CartListPrice,
  CartList,
}) => {
  // console.log(CartList);

  return (
    <View style={styles.CardContainer}>
      {/* Date and Money */}
      <View style={styles.CardHeader}>
        {/* Date */}
        <View>
          <Text style={styles.OrderTitle}>Order Date</Text>
          <Text style={styles.OrderSubTitle}>{OrderDate}</Text>
        </View>
        {/* Money */}
        <View style={styles.PriceContainer}>
          <Text style={styles.OrderTitle}>Total Amount</Text>
          <Text style={styles.OrderSubTitlePricce}> $ {CartListPrice}</Text>
        </View>
      </View>
      {/* Card */}
      <View style={styles.ListContainer}>
        {CartList.map((data: any, index: any) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigationHandler({
                index: data.index,
                id: data.id,
                type: data.type,
              });
            }}>
            <OrderItemCard
              imagelink_square={data.imagelink_square}
              type={data.type}
              name={data.name}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              ItemPrice={data.ItemPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    gap: SPACING.space_10,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  OrderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  OrderSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: 'flex-end',
  },
  OrderSubTitlePricce: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
  },
  ListContainer: {
    gap: SPACING.space_20,
  },
});
export default OrderHistoryCard;
