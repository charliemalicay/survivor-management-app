'user client'

import * as React from 'react';

import { Provider } from 'react-redux';
import makeStore from './store';


// { children: React.ReactNode }

const StoreProvider = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    return (
        <Provider store={makeStore}>
            {children}
        </Provider>
    )
}

export default StoreProvider;
