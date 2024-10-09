'use client';

import React, { PropsWithChildren, useRef } from 'react';

import { AppStore, makeStore, store, wrapper } from '../services/store';

import { Provider } from 'react-redux';

const StoreProvider: React.FC<PropsWithChildren<{}>> = ({ children, ...rest}) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  // const {store, props} = wrapper.useWrappedStore(rest); no support for wrapper in next14 yet
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
