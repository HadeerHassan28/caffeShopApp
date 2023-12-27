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
      addToCart: (cartItem: any) =>
        set(
          produce(state => {
            //Logic add to cart
            let found: boolean = false;
            for (let i = 0; i < state.CartList.length; i++) {
              if (state.CartList[i].id === cartItem.id) {
                found = true;
                let size: boolean = false;
                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                  if (
                    state.CartList[i].prices[j].size === cartItem.prices[0].size
                  ) {
                    size = true;
                    state.CartList[i].prices[j].quantity++;
                    break;
                  }
                }
                if (size === false) {
                  state.CartList[i].prices.push(cartItem.prices[0]);
                }
                state.CartList[i].prices.sort((a: any, b: any) => {
                  if (a.size > b.size) {
                    return -1;
                  }
                  if (a.size < b.size) {
                    return 1;
                  }
                  return 0;
                });
                break;
              }
            }
            if (found === false) {
              state.CartList.push(cartItem);
            }
          }),
        ),
      calculateCartPrice: () => set(produce(state => {
        let totalPrice: number = 0;
  
      })),
     
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorageStatic),
    },
  }),
));
