/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/stackNavigator';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {RootSiblingParent} from 'react-native-root-siblings';

import {
  requestUserPermission,
  notificationListener,
} from './src/utils/notificationServices';
import colors from './src/config/colors';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

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
      <StatusBar
        style="auto"
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.primary}
      />
    </Fragment>
  );
};

export default App;
