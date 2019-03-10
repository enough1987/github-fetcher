import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createNavigator,
  SwitchRouter,
  SceneView
} from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import { Container } from 'react-bootstrap';

import './App.css';
import Repository from '../Repository/Repository';
import Header from '../../components/Header/Header';

class SidebarView extends Component {
  componentDidMount () {
    document.title = 'GitHub fetcher';
  }

  render () {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[ navigation.state.index ].key;
    const descriptor = descriptors[ activeKey ];

    return (
        <Container fluid='true' className="App"
          data-test="App" >
            <Header data-test="header"/>

            <div>
                <SceneView
                  component={ descriptor.getComponent() }
                  navigation={ descriptor.navigation }
                />
            </div>
        </Container>
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
    Repository
  }),
  {
    header: {
      title: 'GitHub fetcher'
    }
  }
);

export const App = createBrowserApp(AppNavigator);

export default App;
