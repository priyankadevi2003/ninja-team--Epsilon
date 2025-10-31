// components/styles/layoutStyles.ts
import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  resultBox: {
    marginTop: 25,
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 40,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
  },
});
