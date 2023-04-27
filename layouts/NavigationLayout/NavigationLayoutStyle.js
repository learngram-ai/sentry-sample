import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../utils/globalStyleVariables";

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  headingContainer: {
    marginTop: 10,
  },
  headingText: {
    color: colors.blue1,
    fontFamily: fontFamily.gibsonSemiBold,
    letterSpacing: 0.5,
    textTransform: "capitalize",
  },
});

export default styles;
