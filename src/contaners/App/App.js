import React, { Component } from 'react';
import {
  createNavigator,
  SwitchRouter,
  SceneView
} from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";

import './App.css';
import Header from '../../components/Header/Header';
import Counter from '../Counter/Counter';
import GuessWord from '../GuessWord/GuessWord';


class SidebarView extends Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div  className="App" 
            data-test="App" >
        <Header />

        <div>
          <SceneView
            component={descriptor.getComponent()}
            navigation={descriptor.navigation}
          />
        </div>
      </div>
    );
  }
}

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
    GuessWord,
    Counter
  }),
  {}
);

export const App = createBrowserApp(AppNavigator);

export default App;
