import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Switch,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import { logoutProcedure } from "../../store/actions/utilsActions";
import { screenNames } from "../../utils/analytics";

import {
  Feather,
  Fontisto,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import profileBg from "./assets/image.png";
import styles from "./DrawerContentStyles";
import NortificationIcon from "../AppNavigator/assets/activityIcon";
import SettingIcon from "./assets/settingIcon";
import PaymentsIcon from "./assets/paymentsIcon";
import ContactusIcon from "./assets/contactUsIcon";
import DeleteIcon from "../../assets/icons/delete_icon.svg";
import PrivacyPolicyIcon from "./assets/privacyPolicyIcon";
import LogOutIcon from "./assets/logOutIcon";
import AboutusIcon from "./assets/aboutUsIcon";
import { UserAvatarGeneral } from "../Avatar/Avatar";
import Version from "react-native-version-number";
import { colors, fontFamily, fontSize } from "../../utils/globalStyleVariables";
import CustomButton from "../UILibrary/Buttons/CustomButton";

function DrawerContent({ logoutProcedure, user, ...props }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleLogOut = () => {
    logoutProcedure();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 250,
          width: "100%",
          backgroundColor: "#2A2E43",
          // position: "absolute",
        }}
      >
        <ImageBackground
          source={profileBg}
          style={{ height: 250, width: "100%" }}
        >
          <View style={{ padding: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <CustomButton
                type="icon-only"
                icon={<Feather name="edit-3" size={24} color="#fff" />}
                onPress={() => {
                  props.navigation.navigate(screenNames.userProfile);
                  props.navigation.closeDrawer();
                }}
              />
            </View>
            <View
              style={{
                alignItems: "flex-start",
                marginTop: 30,
                marginLeft: 30,
              }}
            >
              <UserAvatarGeneral
                user={user}
                height={65}
                width={65}
                borderRadius={13}
                fontSize={32}
              />
              <Text
                style={[
                  {
                    marginTop: 8,
                    color: "#fff",
                    fontSize: 24,
                    fontFamily: "GibsonSemiBold",
                    width: "85%",
                  },
                ]}
                numberOfLines={1}
              >
                {user.name}
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "GibsonRegular",
                  opacity: 0.56,
                  width: "85%",
                }}
                numberOfLines={1}
              >
                {user.email}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          height: 8,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{ width: "25%", height: "100%", backgroundColor: "#FF913E" }}
        ></View>
        <View
          style={{ width: "25%", height: "100%", backgroundColor: "#FB963C" }}
        ></View>
        <View
          style={{ width: "25%", height: "100%", backgroundColor: "#17C8AF" }}
        ></View>
        <View
          style={{ width: "25%", height: "100%", backgroundColor: "#FDBB5C" }}
        ></View>
      </View>
      <View
        style={{
          padding: 20,
          marginTop: 5,
        }}
      >
        <View>
          {/* <View style={styles.optionRowContainer}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <NortificationIcon
                  width={14}
                  height={16}
                  fillSecondary="#17C8AF"
                />
                <Text style={styles.sidebarBtnText}>Nortifications</Text>
              </View>
            </TouchableOpacity>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
          </View> */}
          <View style={styles.optionRowContainer}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(screenNames.createPassword)
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <SettingIcon width={14} height={16} />
                <Text style={styles.sidebarBtnText}>
                  {props.hasSetPassword
                    ? "Change Password"
                    : screenNames.createPassword}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.optionRowContainer}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <PaymentsIcon width={14} height={16} />
                <Text style={styles.sidebarBtnText}>payments</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.optionRowContainer}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ContactusIcon width={14} height={16} />
                <Text style={styles.sidebarBtnText}>contact us</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.optionRowContainer}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AboutusIcon width={14} height={16} />
                <Text style={styles.sidebarBtnText}>about us</Text>
              </View>
            </TouchableOpacity>
          </View>
           */}
          <View style={styles.optionRowContainer}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(screenNames.privacyPolicy, {
                  showButtons: false,
                })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <PrivacyPolicyIcon width={14} height={16} />
                <Text style={styles.sidebarBtnText}>privacy policy</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 15, left: 20 }}>
        <TouchableOpacity onPress={handleLogOut}>
          <View style={styles.sidebarSignOutBtn}>
            <LogOutIcon width={20} height={20} />
            <Text
              style={[
                styles.sidebarBtnText,
                {
                  marginRight: 10,
                },
              ]}
            >
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: fontSize.font10,
            fontFamily: fontFamily.poppinsRegular,
            color: colors.blue2,
            opacity: 0.6,
          }}
        >
          App version {Version.appVersion}
        </Text>
      </View>
    </View>
  );
}

const mapStateToProps = ({ user }) => ({
  user: user,
  hasSetPassword: user.has_set_password,
});

const mapDispatchToProps = (dispatch) => ({
  logoutProcedure: () => dispatch(logoutProcedure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
