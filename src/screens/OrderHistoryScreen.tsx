import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PopUpAnimation from '../components/PopUpAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';
import {type} from 'os';
const OrderHistoryScreen = ({navigation}: any) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [showAnimation, setshowAnimation] = useState(false);
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);

  const navigationHandler = ({index, id, type}: any) => {
    navigation.push('Details', {id, index, type});
  };
  //console.log('History', OrderHistoryList);

  // while (OrderHistoryList.length > 0) {
  //   OrderHistoryList.pop();
  // }
  return (
    <View style={styles.ScreenContainer}>
      {/* status Bar (time on the mobile) */}
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {/* Add animation */}
      {showAnimation && (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/successful.json')}
        />
      )}
      {/* End of animation */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            {/* Title */}
            <HeaderBar title="Order History" />

            {/* Items */}
            {OrderHistoryList.length === 0 ? (
              <EmptyListAnimation title="No Order History" />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index}
                    navigationHandler={(indexData, id, type) => {
                      navigationHandler(indexData, id, type);
                    }}
                    OrderDate={data.OrderDate}
                    CartListPrice={data.CartListPrice}
                    CartList={data.CartList}
                  />
                ))}
              </View>
            )}
          </View>
          {/* Download Button */}
          {OrderHistoryList.length > 0 ? (
            <TouchableOpacity style={styles.DownloadButton}>
              <Text style={styles.DownloadText}>Download</Text>
            </TouchableOpacity>
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
  ScrollViewFlex: {flexGrow: 1},
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {flex: 1},
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_30,
  },
  LottieAnimation: {
    height: 250,
  },
  DownloadButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_25,
    margin: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DownloadText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_semibold,
    textAlign: 'center',
  },
});
export default OrderHistoryScreen;
