import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from './ImageBackgroundInfo';

interface FavoritesItemCardProps {
  id: string;
  name: string;
  type: string;
  average_rating: number;
  description: string;
  roasted: string;
  ingredients: string;
  imagelink_portrait: ImageProps;
  special_ingredient: string;
  ratings_count: string;
  favourite: boolean;
  ToggleFavouriteItem: any;
}

const FavoritesItemCard: React.FC<FavoritesItemCardProps> = ({
  id,
  name,
  type,
  average_rating,
  description,
  roasted,
  ingredients,
  imagelink_portrait,
  special_ingredient,
  ratings_count,
  favourite,
  ToggleFavouriteItem,
}) => {
  return (
    <View style={styles.CardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavourite={ToggleFavouriteItem}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.ContainerLinearGradient}>
        <Text style={styles.DescriptionTitle}>Description</Text>
        <Text style={styles.DescriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  ContainerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },
  DescriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  DescriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});
export default FavoritesItemCard;
