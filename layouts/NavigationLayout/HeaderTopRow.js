import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { getInitials } from "../../utils/misc";
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
} from "../../utils/globalStyleVariables";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/UILibrary/Buttons/CustomButton";

export default function HeaderTopRow({ userName, userImage, title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <CustomButton
        type="icon-only"
        icon={
          <View style={styles.backArrow}>
            <Entypo name="chevron-small-down" size={35} color="black" />
          </View>
        }
        onPress={() => navigation.goBack()}
        buttonStyle={{ padding: 0 }}
      />
      {title && (
        <View>
          <Text style={styles.titleText}>{title} </Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <TouchableHighlight
          underlayColor="transparent"
          style={{
            paddingHorizontal: 10,
          }}
          onPress={() => navigation.openDrawer()}
        >
          {userImage ? (
            <Image
              source={{
                uri: userImage,
              }}
              style={styles.userImage}
            ></Image>
          ) : (
            <LinearGradient
              colors={[
                colors.orangeGradient2.start,
                colors.orangeGradient2.end,
              ]}
              style={styles.userInitials}
            >
              <Text style={styles.userInitialsText}>
                {getInitials(userName)}
              </Text>
            </LinearGradient>
          )}
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    transform: [{ rotate: "90deg" }],
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  userImage: {
    height: 32,
    width: 32,
    resizeMode: "cover",
    borderRadius: borderRadius.br8,
  },
  userInitials: {
    width: 32,
    height: 32,

    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    borderRadius: borderRadius.br8,
    alignItems: "center",
    justifyContent: "center",
  },
  userInitialsText: {
    fontSize: fontSize.font16,
    color: colors.white,
    textTransform: "uppercase",
    fontFamily: fontFamily.gibsonSemiBold,
  },
  titleText: {
    color: colors.blue1,
    fontFamily: fontFamily.gibsonSemiBold,
    letterSpacing: 0.5,
    textTransform: "capitalize",
    fontSize: fontSize.font24,
  },
});

/**
 * this component is not well connected to @NavigationLayout
 * don't forget to refactor before use
 */
export function SearchBar({ showSearchInput, handleSearch }) {
  return (
    <>
      {!showSearchInput ? (
        <TouchableOpacity
          onPress={() => this.setState({ showSearchInput: true })}
          style={{
            display: "none",
          }}
        >
          <View
            style={{
              backgroundColor: "#F7F8FA",
              width: 34,
              height: 34,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="search" size={24} color="#78849E" />
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            backgroundColor: "#F7F8FA",
            height: 34,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            width: "75%",
          }}
        >
          <TouchableOpacity
            onPress={this.handleSearch}
            style={{
              display: "none",
            }}
          >
            <View
              style={{
                backgroundColor: "#F7F8FA",
                width: 34,
                height: 34,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="search" size={24} color="#78849E" />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 18,
              width: 1,
              backgroundColor: "#BBC5D5",
              marginHorizontal: 3,
            }}
          ></View>
          <View>
            <TextInput
              ref={(ref) => (this.searchRef = ref)}
              style={{
                paddingVertical: 5,
                fontSize: 12,
                fontFamily: "GibsonRegular",
              }}
              placeholder="Search Keyword"
              placeholderTextColor="#BBC5D5"
              allowFontScaling={false}
              value={inputText}
              onChangeText={(text) => this.handleInput(text)}
            />
          </View>
        </View>
      )}
    </>
  );
}
