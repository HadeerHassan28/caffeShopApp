import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.ImgContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.Img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ImgContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Img: {height: SPACING.space_36, width: SPACING.space_36},
});
export default ProfilePic;
