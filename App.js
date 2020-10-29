/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';
import Store from './src/View/Redux/store';
import Main from './src/View/Component/main';
import { onChangeLang, onChangeTheme } from './src/View/Redux/action/lang-theme-action';
import { Navigation } from './src/View/Component/Navigation/navigation';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const demo = () => {
    //debugger
    console.log("Hello");
  }

  AsyncStorage.getItem('lang').then((value) => {
    if (value && typeof value === 'string') {
      switch (value) {
        case 'en':
          Store.dispatch(onChangeLang(value));
          break;
        default:
          Store.dispatch(onChangeLang('vi'));
          break;
      }
    }
  });

  AsyncStorage.getItem('theme').then((value) => {
    //debugger
    if (value && typeof value === 'string') {
      switch (value) {
        case 'dark_theme':
          Store.dispatch(onChangeTheme(value));
          break;
        default:
          Store.dispatch(onChangeTheme('default_theme'));
          break;
      }
    }
  });

  return (
    <Provider store={Store}>
      {/* <Main /> */}
      <Navigation />
    </Provider>
  );
}
export default App;
