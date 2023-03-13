import { GlobalStore } from 'react-native-global-state-hooks';

const itemStore = new GlobalStore(0);
export const useItemGlobal = itemStore.getHook();

const skuStore = new GlobalStore([]);
export const useSKUGlobal = skuStore.getHook();