import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  ImageBackground,
} from 'react-native';
import React from 'react';

interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean; //To show the back button
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  types,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ItemBgGroundImg}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBgGroundImg: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
});
export default ImageBackgroundInfo;
