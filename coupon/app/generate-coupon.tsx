import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useCoupon } from "../hooks/useCoupon";
import CouponCard from "../components/CouponCard";
import { COLORS } from "../constants/theme";

export default function GenerateCoupon() {
  const { generateCoupon } = useCoupon();
  const [coupon, setCoupon] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎟️ Random Coupon Generator</Text>

      {coupon ? <CouponCard code={coupon} /> : <Text style={styles.empty}>No coupon yet</Text>}

      <TouchableOpacity style={styles.button} onPress={() => setCoupon(generateCoupon(10))}>
        <Text style={styles.buttonText}>Generate Coupon</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 30,
  },
  empty: {
    fontSize: 18,
    color: "#888",
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
