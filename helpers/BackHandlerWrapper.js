import React, { useCallback } from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { throttle } from "lodash";

/**
 * @param {{onBackPress: Function, children: React.ReactElement}} props
 * @returns
 */
export const BackHandlerWrapper = (props) => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = throttle(() => {
        props.onBackPress();
        /**
         * Returning true from onBackPress denotes that we have handled the event,
         * and react-navigation's listener will not get called, thus not popping the screen.
         * Returning false will cause the event to bubble up and react-navigation's
         * listener will pop the screen.
         */
        return true;
      }, 1000);

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
  return props.children;
};
