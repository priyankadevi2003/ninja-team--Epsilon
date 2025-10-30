import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import layoutStyles from "./styles/layoutStyles";
import textStyles from "./styles/textStyles";
import buttonStyles from "./styles/buttonStyles";
import colors from "./styles/colors";

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

  // Display validation message
  const validateCoupon = () => {
    if (!isValid) {
      Alert.alert("Invalid Coupon", "Coupon must be at least 8 characters long!");
    } else {
      Alert.alert("✅ Success", `Your coupon "${coupon}" is valid!`);
    }
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
        </View>
      )}
    </View>
  );
}
