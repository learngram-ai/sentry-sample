import React, { Component } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderTopRow from "./HeaderTopRow";
import styles from "./NavigationLayoutStyle";
import { connect } from "react-redux";
import { colors, elevation } from "../../utils/globalStyleVariables";
import LoaderWrapper from "../../components/Loader";

class NavigationLayout extends Component {
  render() {
    return (
      <LoaderWrapper loading={this.props.loading}>
        <View style={{ width: "100%", height: "100%" }}>
          {this.props.headerComponent ?? (
            <View
              style={[
                styles.header,
                this.props.elevated &&
                  !this.props.loading && { ...elevation.e12 },
              ]}
            >
              <HeaderTopRow
                userImage={this.props.userImage}
                userName={this.props.userName}
                title={this.props.title}
              />
            </View>
          )}

          <LinearGradient
            colors={[colors.whiteGradient.start, colors.whiteGradient.end]}
            style={{ flex: 1 }}
          >
            {this.props.children}
          </LinearGradient>
        </View>
      </LoaderWrapper>
    );
  }
}

NavigationLayout.defaultProps = {
  elevated: true,
};

const mapStateToProps = ({ user }) => ({
  userImage: user.profile_photo_url || user.profilePhotoUrl,
  userName: user.name,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLayout);
