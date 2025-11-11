import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCouponContext } from "../../context/CouponContext";

export default function CouponDisplay() {
  const { coupons, redeemCoupon } = useCouponContext();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎉 Active Coupons</Text>

      {coupons.length === 0 ? (
        <Text style={styles.noCoupons}>No coupons available</Text>
      ) : (
        coupons.map((coupon, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.code}>Code: {coupon.code}</Text>
            <Text style={styles.discount}>
              Discount: {coupon.discount}%{coupon.discount === "0" && " (Free Shipping)"}
            </Text>
            <Text style={styles.status}>{coupon.status}</Text>

            {!coupon.redeemed && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => redeemCoupon(coupon.code)}
              >
                <Text style={styles.buttonText}>Redeem</Text>
              </TouchableOpacity>
            )}
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
  button: {
    backgroundColor: "#1E88E5",
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
