import { StyleSheet, View, Text, Platform } from "react-native";

import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Math.round(Dimensions.get("window").width),
    height: Math.round(Dimensions.get("window").height),
  },
  contentStyles: {
    position: "absolute",
    top: "30%",
    left: "15%",
    width: "70%",
    height: "15%",
    display: "flex",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 26,
    color: "black",
    fontFamily: "KarlaBold",
  },
  forgotPassword: {
    marginTop: 20,
    left: "60%",
  },
  forgotPasswordText: {
    color: "#767676",
    fontSize: 12,
    fontFamily: "Karla",
  },
  signInButton: {
    width: "100%",
    backgroundColor: "#5abd8c",
    shadowColor: "rgba(90, 189, 140, 0.55)",
    shadowOffset: { width: 15, height: 0 },
    shadowRadius: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    zIndex: 2,
    padding: 15,
  },
  signInText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Karla",
  },
  orText: {
    textAlign: "center",
    fontSize: 16,
    color: "grey",
    fontFamily: "Karla",
    top: 10,
  },
});

export default styles;
