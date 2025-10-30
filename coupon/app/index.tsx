import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import RandomCouponGenerator from "../components/RandomCouponGenerator";
import colors from "../components/styles/colors";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <RandomCouponGenerator />
    </SafeAreaView>
  );
}
