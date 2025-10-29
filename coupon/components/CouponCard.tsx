import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

interface CouponCardProps {
  code: string;
}

export default function CouponCard({ code }: CouponCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Your Coupon Code:</Text>
      <Text style={styles.code}>{code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 5,
  },
  code: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.primary,
    letterSpacing: 2,
  },
});
