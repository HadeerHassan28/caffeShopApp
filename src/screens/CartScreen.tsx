import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';
import CartItem from '../components/CartItem';
const CartScreen = ({navigation, route}: any) => {
  const tabHightButtonBar = useBottomTabBarHeight();

  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const buttonPressableHandler = () => {
    navigation.push('Payment', {amount: CartPrice});
  };

  const incrementCartItemQuantities = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantities = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  // while (CartList.length > 0) {
  //   CartList.pop();
  // }
  console.log('CartList ', CartList);

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[
            styles.ScrollViewInnerView,
            {marginBottom: tabHightButtonBar},
          ]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />
            {CartList.length === 0 ? (
              <EmptyListAnimation title="Cart is Empty" />
            ) : (
              <View style={styles.ListItemContainer}>
                {CartList.map((data: any) => (
                  <>
                    <TouchableOpacity
                      key={data.id}
                      onPress={() => {
                        navigation.push('Details', {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        });
                      }}>
                      <CartItem
                        id={data.id}
                        name={data.name}
                        roasted={data.roasted}
                        imagelink_square={data.imagelink_square}
                        special_ingredient={data.special_ingredient}
                        prices={data.prices}
                        type={data.type}
                        incrementCartItemQuantity={(
                          id: string,
                          size: string,
                        ) => {
                          incrementCartItemQuantities(id, size);
                        }}
                        decrementCartItemQuantity={(
                          id: string,
                          size: string,
                        ) => {
                          decrementCartItemQuantities(id, size);
                        }}
                      />
                    </TouchableOpacity>
                  </>
                ))}
              </View>
            )}
          </View>
          {CartList.length !== 0 ? (
            <PaymentFooter
              bottonTitle="Pay"
              price={{price: CartPrice, currency: '$'}}
              buttonPressableHandler={() => {
                buttonPressableHandler();
              }}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
export default CartScreen;
