import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import buttonStyles from "../styles/buttonStyles";
import colors from "../styles/colors";
import layoutStyles from "../styles/layoutStyles";
import textStyles from "../styles/textStyles";

interface CouponDataProps {
  coupon: string;
}

export default function CouponData({ coupon }: CouponDataProps) {
  const [isValid, setIsValid] = useState<boolean>(true);

  // 🔹 Validate coupon
  const validateCoupon = () => {
    if (!coupon) {
      Alert.alert("⚠️ No Coupon", "Please generate a coupon first!");
      return;
    }

    if (coupon.length < 8) {
      setIsValid(false);
      Alert.alert("❌ Invalid", "Coupon must be at least 8 characters long!");
    } else {
      setIsValid(true);
      Alert.alert("✅ Valid Coupon", `Your coupon "${coupon}" is valid!`);
    }
  };

  // 🔹 Redeem coupon
  const redeemCoupon = () => {
    if (!coupon) {
      Alert.alert("⚠️ No Coupon", "Please generate a coupon first!");
      return;
    }

    if (!isValid) {
      Alert.alert("❌ Invalid Coupon", "Please validate your coupon first!");
      return;
    }

    Alert.alert("🎉 Success", `You have successfully redeemed "${coupon}"!`);
  };

  return (
    <View style={layoutStyles.resultBox}>
      <Text
        style={[
          textStyles.couponText,
          { color: isValid ? colors.success : colors.error },
        ]}
      >
        {coupon || "No Coupon Generated"}
      </Text>

      <TouchableOpacity
        style={[
          buttonStyles.button,
          { backgroundColor: colors.secondary, marginTop: 15 },
        ]}
        onPress={validateCoupon}
      >
        <Text style={buttonStyles.buttonText}>Validate Coupon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          buttonStyles.button,
          { backgroundColor: colors.success, marginTop: 10 },
        ]}
        onPress={redeemCoupon}
      >
        <Text style={buttonStyles.buttonText}>Redeem Coupon</Text>
      </TouchableOpacity>
    </View>
  );
}
