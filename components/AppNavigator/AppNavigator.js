import React, { Component } from "react";

import { Text, StatusBar, TextInput } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import { screenNames } from "../../utils/analytics";

const Stack = createStackNavigator();

const maxFontSizeMultiplier = 1.2;
const oldTextRender = Text.render;
Text.render = function (...args) {
  let origin = oldTextRender.call(this, ...args);
  let styles = origin.props.style;

  if (styles instanceof Array) {
    styles = Object.assign({}, ...styles);
  }

  const fontFamily = styles?.fontFamily
    ? styles.fontFamily
    : styles?.fontWeight === "bold"
    ? "GibsonBold"
    : "GibsonRegular";

  const newProps = {
    maxFontSizeMultiplier,
    style: { ...styles, fontFamily },
  };

  return React.cloneElement(origin, newProps);
};

TextInput.defaultProps = {
  maxFontSizeMultiplier,
  underlineColorAndroid: "transparent",
};

class AppNavigator extends Component {
  state = {
    hideStatusBar: false,
    changed: false,
    showDeleteAccSuccessPopup: false,
  };

  navigation;

  render() {
    const { userLoggedIn, forceUpdate } = this.props;

    return (
      <>
        <NavigationContainer
          onStateChange={this.handleNavigationStateChange}
          onReady={this.handleNavigationOnReady}
          ref={this.handleNavigationRef}
        >
          <StatusBar hidden={this.state.hideStatusBar} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={
              userLoggedIn
                ? forceUpdate
                  ? screenNames.forceUpdate
                  : screenNames.activity
                : screenNames.home
            }
          >
            <Stack.Screen
              name={screenNames.home}
              component={routes[screenNames.home].component}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default AppNavigator;
