import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface CoffeeDescritipnProps {
  Description: string;
  prices: any;
  type: string;
}

const CoffeeDescritipn: React.FC<CoffeeDescritipnProps> = ({
  Description,
  prices,
  type,
}) => {
  const [fullDescription, setFullDescription] = useState(false);
  const [price, setPrice] = useState(prices[0]);

  return (
    <View style={styles.FooterInfoArea}>
      {/* Description */}
      <Text style={styles.InfoTitle}>Description</Text>
      {fullDescription ? (
        <TouchableWithoutFeedback
          onPress={() => setFullDescription(prev => !prev)}>
          <Text style={styles.DescriptionText}>{Description}</Text>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => setFullDescription(prev => !prev)}>
          <Text numberOfLines={3} style={styles.DescriptionText}>
            {Description}
          </Text>
        </TouchableWithoutFeedback>
      )}

      {/* Size */}
      <Text style={styles.InfoTitle}>Size</Text>
      <View style={styles.SizeOutterContainer}>
        {prices.map((data: any) => (
          <TouchableOpacity
            onPress={() => {
              setPrice(data);
            }}
            key={data.size}
            style={[
              styles.SizeBox,
              {
                borderColor:
                  data.size === price.size
                    ? COLORS.primaryOrangeHex
                    : COLORS.primaryDarkGreyHex,
              },
            ]}>
            <Text
              style={[
                styles.SizeText,
                {
                  fontSize:
                    type === 'bean' ? FONTSIZE.size_14 : FONTSIZE.size_16,
                  color:
                    data.size === price.size
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryWhiteHex,
                },
              ]}>
              {data.size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FooterInfoArea: {
    padding: SPACING.space_20,
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    marginBottom: SPACING.space_10,
  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    marginBottom: SPACING.space_30,
  },
  SizeOutterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
export default CoffeeDescritipn;
