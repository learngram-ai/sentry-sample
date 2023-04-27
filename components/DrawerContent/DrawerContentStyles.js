import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
  },
  profileImg: {
    width: 65,
    height: 65,
    borderRadius: 8,
    resizeMode: "cover",
  },
  optionRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginVertical: 5,
    // backgroundColor: "red",
    justifyContent: "space-between",
  },
  sidebarBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // marginLeft: 15,
    // paddingRight: 35,
    // borderBottomColor: "#c1c7d0",
    // borderBottomWidth: 2,
    // paddingBottom: 20,
  },
  sidebarBtnText: {
    color: "#454F63",
    fontFamily: "GibsonRegular",
    fontSize: 18,
    textTransform: "capitalize",
    marginLeft: 15,
  },
  sidebarSignOutBtn: {
    flexDirection: "row",
    // justifyContent: "flex-end",
    width: "100%",
    // paddingRight: 50,
    // borderTopColor: "#c1c7d0",
    // borderTopWidth: 2,
    // paddingTop: 20,
    marginBottom: 10,
  },
});

export default styles;
