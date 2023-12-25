import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorageStatic from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      FavoritesList: [],
      CartList: [],
      CartPrice: 0,
      OrderHistoryList: [],
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorageStatic),
    },
  ),
);
