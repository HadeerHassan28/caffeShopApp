import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';

import FavoritesItemCard from '../components/FavoritesItemCard';

const FavoritesScreen = ({navigation}: any) => {
  const bottomTabBar = useBottomTabBarHeight();
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const ToggleFavourite = (id: string, type: string, favourite: boolean) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  //console.log(FavoritesList);

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: bottomTabBar}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Favorites" />
            {FavoritesList.length === 0 ? (
              <EmptyListAnimation title="No Favorites" />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavoritesList.map((data: any) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('Details', {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        });
                      }}
                      key={data.id}>
                      <FavoritesItemCard
                        id={data.id}
                        name={data.name}
                        type={data.type}
                        average_rating={data.average_rating}
                        description={data.description}
                        roasted={data.roasted}
                        imagelink_portrait={data.imagelink_portrait}
                        special_ingredient={data.special_ingredient}
                        ratings_count={data.ratings_count}
                        ingredients={data.ingredients}
                        favourite={data.favourite}
                        ToggleFavouriteItem={(
                          id: string,
                          type: string,
                          favourite: boolean,
                        ) => ToggleFavourite(id, type, favourite)}
                      />
                    </TouchableOpacity>
                  </>
                ))}
              </View>
            )}
          </View>
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

export default FavoritesScreen;
