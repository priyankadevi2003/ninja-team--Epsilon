import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Coupon {
  code: string;
  discount: string;
  status: string;
}

interface CouponDisplayProps {
  coupons: Coupon[];
}

export default function CouponDisplay({ coupons = [] }: CouponDisplayProps) {
  // Default coupons (always shown)
  const defaultCoupons = [
    { code: "SAVE10", discount: "10", status: "✅ Valid" },
    { code: "WELCOME20", discount: "20", status: "✅ Valid" },
    { code: "FREESHIP", discount: "0", status: "✅ Valid - Free Shipping" },
  ];

  // Merge default + added coupons
  const allCoupons = [...defaultCoupons, ...coupons];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Active Coupons</Text>

      {allCoupons.length === 0 ? (
        <Text style={styles.noCoupons}>No coupons added yet</Text>
      ) : (
        allCoupons.map((coupon, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.code}>Code: {coupon.code}</Text>
            <Text style={styles.discount}>
              Discount: {coupon.discount}%
              {coupon.discount === "0" && " (Free Shipping)"}
            </Text>
            <Text style={styles.status}>{coupon.status}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  noCoupons: {
    textAlign: "center",
    color: "#666",
    fontStyle: "italic",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  code: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E88E5",
    marginBottom: 5,
  },
  discount: {
    fontSize: 16,
    color: "#43A047",
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    color: "#666",
  },
});