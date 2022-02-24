/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/stackNavigator';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RootSiblingParent>
              <StackNavigator />
            </RootSiblingParent>
          </PersistGate>
        </Provider>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Fragment>
  );
};

export default App;
