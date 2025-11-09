import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCoupons } from "../../context/CouponContext";

interface Props {
  coupons?: Array<{ code: string; discount: string; status: string }>;
}

export default function CouponDisplay({ coupons: propCoupons }: Props = {}) {
  // Try to get coupons from context, fallback to props
  const context = useCoupons();
  const coupons = context?.coupons || propCoupons || [];

  // Default coupons (only shown if not already present)
  const defaultCoupons = [
    { code: "SAVE10", discount: "10", status: "✅ Valid" },
    { code: "WELCOME20", discount: "20", status: "✅ Valid" },
    { code: "FREESHIP", discount: "0", status: "✅ Valid - Free Shipping" },
  ];

  // Merge default + dynamic coupons while avoiding duplicates by code
  const allCoupons = [
    ...defaultCoupons,
    ...coupons.filter(
      (coupon: { code: string }) => !defaultCoupons.some((d) => d.code === coupon.code)
    ),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎉 Active Coupons</Text>

      {allCoupons.length === 0 ? (
        <Text style={styles.noCoupons}>No coupons available</Text>
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
    backgroundColor: "#F9FBFD",
    borderRadius: 12,
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E88E5",
    marginBottom: 15,
    textAlign: "center",
  },
  noCoupons: {
    textAlign: "center",
    color: "#999",
    fontStyle: "italic",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  code: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 5,
  },
  discount: {
    fontSize: 16,
    color: "#43A047",
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    color: "#555",
  },
});
