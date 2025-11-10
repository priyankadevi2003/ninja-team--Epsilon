import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import buttonStyles from "../styles/buttonStyles";
import colors from "../styles/colors";
import layoutStyles from "../styles/layoutStyles";
import textStyles from "../styles/textStyles";

export default function RandomCouponGenerator() {
  const [coupon, setCoupon] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  // Generate random 8-character coupon
  const generateCoupon = () => {
    const newCoupon = Math.random().toString(36).substring(2, 10).toUpperCase();
    setCoupon(newCoupon);
  };

  // Validation effect: check coupon length
  useEffect(() => {
    if (coupon && coupon.length < 8) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [coupon]);

  // Validate coupon message
  const validateCoupon = () => {
    if (!isValid) {
      Alert.alert("Invalid Coupon", "Coupon must be at least 8 characters long!");
    } else {
      Alert.alert("✅ Success", `Your coupon "${coupon}" is valid!`);
    }
  };

  // 🔹 Redeem Coupon Function
  const redeemCoupon = () => {
    if (!coupon) {
      Alert.alert("⚠️ No Coupon", "Please generate a coupon first!");
      return;
    }

    if (!isValid) {
      Alert.alert("❌ Invalid", "Please validate a valid coupon before redeeming!");
      return;
    }

    // You can perform further logic here (like API call, discount, etc.)
    Alert.alert("🎉 Coupon Redeemed!", `You have successfully redeemed "${coupon}"`);
    setCoupon(""); // Optional: clear after redeem
  };

  return (
    <View style={layoutStyles.container}>
      <Text style={textStyles.header}>🎟️ Random Coupon Generator</Text>

      <TouchableOpacity
        style={[buttonStyles.button, { backgroundColor: colors.primary }]}
        onPress={generateCoupon}
      >
        <Text style={buttonStyles.buttonText}>Generate Coupon</Text>
      </TouchableOpacity>

      {coupon !== "" && (
        <View style={layoutStyles.resultBox}>
          <Text
            style={[
              textStyles.couponText,
              { color: isValid ? colors.success : colors.error },
            ]}
          >
            {coupon}
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

          {/* 🔹 Redeem Button Added Below */}
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
      )}
    </View>
  );
}
