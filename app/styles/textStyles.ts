// components/styles/textStyles.ts
import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 25,
    textAlign: "center",
  },
  couponText: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 10,
  },
});
