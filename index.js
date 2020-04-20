/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import { Tester, TestHookStore } from 'cavy';
import App from './Home';

const testHookStore = new TestHookStore();

class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[exampleSpec]} store={testHookStore} >
        <App/>
      </Tester>
    );
  }
}
AppRegistry.registerComponent(appName, () => AppWrapper);


