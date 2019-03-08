import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createNavigator,
  SwitchRouter,
  SceneView
} from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';

import './App.css';
import Language from '../Language/Language';
import Header from '../../components/Header/Header';

class SidebarView extends Component {
  render () {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[ navigation.state.index ].key;
    const descriptor = descriptors[ activeKey ];

    return (
        <div className="App"
          data-test="App" >
            <Header />

            <div>
                <SceneView
                  component={ descriptor.getComponent() }
                  navigation={ descriptor.navigation }
                />
            </div>
        </div>
    );
  }
}

SidebarView.propTypes = {
  navigation: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired
};

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
    Language
  }),
  {}
);

export const App = createBrowserApp(AppNavigator);

export default App;
