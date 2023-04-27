import React, { Component } from "react";

import SplashScreen from "react-native-splash-screen";

import "expo-asset";

import { enableMapSet } from "immer";

import { SafeAreaView, Text } from "react-native";

import AppNavigator from "./components/AppNavigator/AppNavigator";

import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://6fdd67f5364b48649e27e22ccec0ff92@o939196.ingest.sentry.io/4505000093220864",
});

// if (!__DEV__) ErrorUtils.setGlobalHandler(errorUtilsGlobalHandler);

enableMapSet();

console.disableYellowBox = false;
export default class App extends Component {
  state = {
    isReady: false,
  };

  async componentDidMount() {
    try {
      await this.tasksBeforeAppRender();
    } catch (e) {
      console.log(e);
    }

    SplashScreen.hide();
  }

  tasksBeforeAppRender = async () => {
    this.setState({ isReady: true });
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <AppNavigator />
      </SafeAreaView>
    );
  }
}
