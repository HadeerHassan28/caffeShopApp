import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.ImgContainer}>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  ImgContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
export default ProfilePic;
