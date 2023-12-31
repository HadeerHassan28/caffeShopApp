import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface PriceProps {
  price: string;
  currency: string;
}

interface PaymentFooterProps {
  price: PriceProps;
  buttonPressableHandler: any;
  bottonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({}) => {
  return (
    <View>
      <Text>PaymentFppter</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default PaymentFooter;
