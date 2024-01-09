import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';
import {useStore} from '../store/store';
import PopUpAnimation from '../components/PopUpAnimation';

const PaymentList = [
  {name: 'Wallet', icon: 'icon', isIcon: true},
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentScreen = ({navigation, route}: any) => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [showAnimation, setshowAnimation] = useState(false);

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );

  const buttonPressableHandler = () => {
    setshowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setshowAnimation(false);
      navigation.navigate('History');
    }, 2000);
  };
  return (
    <View style={styles.ScreenContainer}>
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
        {/* Title  */}
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>

          <Text style={styles.HeaderText}>Payment</Text>
          <View style={styles.EmptyView} />
        </View>
        {/* Payment */}

        <View style={styles.PaymentActionContainer}>
          {/* Card */}
          <TouchableOpacity onPress={() => setPaymentMode('Credit Card')}>
            <View
              style={[
                styles.CreditCardContainer,
                {
                  borderColor:
                    paymentMode === 'Credit Card'
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}>
              <Text style={styles.CreditCardTitle}>Credit Card</Text>
              <View style={styles.CreditCardBg}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.LinearGradientStyles}>
                  {/* Visa name and icon */}
                  <View style={styles.CreditCardRow}>
                    <CustomIcon
                      name="chip"
                      color={COLORS.primaryOrangeHex}
                      size={FONTSIZE.size_20 * 2}
                    />
                    <CustomIcon
                      name="visa"
                      color={COLORS.primaryWhiteHex}
                      size={FONTSIZE.size_30 * 2}
                    />
                  </View>
                  {/* Card number */}
                  <View style={styles.CardNumberContainer}>
                    <Text style={styles.CreditCardNumber}>3897</Text>
                    <Text style={styles.CreditCardNumber}>8923</Text>
                    <Text style={styles.CreditCardNumber}>6745</Text>
                    <Text style={styles.CreditCardNumber}>4638</Text>
                  </View>
                  {/* Title od ex date and name of card */}
                  <View style={styles.CreditCardRow}>
                    {/* Title */}
                    <View style={styles.CreditCardNameContainer}>
                      <Text style={styles.CreditCardNameSubTitle}>
                        Card Holder Name
                      </Text>
                      <Text style={styles.CreditCardName}>Hadeer Hassan</Text>
                    </View>
                    {/* Date */}
                    <View style={styles.CreditCardDateContainer}>
                      <Text style={styles.CreditCardNameSubTitle}>
                        Expiry Date
                      </Text>
                      <Text style={styles.CreditCardName}>02/30</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {/* Method */}
          {PaymentList.map((data: any, index: any) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setPaymentMode(data.name);
              }}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter
        bottonTitle={`Pay from ${paymentMode}`}
        price={{price: route.params.amount, currency: '$'}}
        buttonPressableHandler={() => {
          buttonPressableHandler();
        }}
      />
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
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  EmptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  PaymentActionContainer: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },
  CreditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15,
    borderWidth: 2,
  },
  CreditCardTitle: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    marginLeft: SPACING.space_10,
  },
  CreditCardBg: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  LinearGradientStyles: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_10,
  },
  CreditCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardNumberContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  CreditCardNumber: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
  },
  CreditCardNameContainer: {
    alignItems: 'flex-start',
  },
  CreditCardNameSubTitle: {
    color: COLORS.secondaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
  },
  CreditCardName: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
  },
  CreditCardDateContainer: {
    alignItems: 'flex-end',
  },
  LottieAnimation: {
    flex: 1,
  },
});
export default PaymentScreen;
