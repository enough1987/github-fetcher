import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createNavigator,
  SwitchRouter,
  SceneView
} from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import './App.css';
import Language from '../Language/Language';
import Header from '../../components/Header/Header';

class SidebarView extends Component {

  componentDidMount() {
    document.title = "GitHub fetcher";
  }

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
  {
    header: {
      title: "GitHub fetcher"
    }
  }
);

export const App = createBrowserApp(AppNavigator);

export default App;
