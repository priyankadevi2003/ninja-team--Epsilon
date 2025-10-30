﻿import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CouponData from "../coupon/components/CouponData";
import CouponDisplay from "../coupon/components/CouponDisplay";
// import RandomCouponGenerator from "../components/RandomCouponGenerator"; // Future feature

interface Coupon {
  code: string;
  discount: string;
  status: string;
}

export default function App() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  // Add new coupon dynamically
  const handleAddCoupon = (newCoupon: Coupon) => {
    setCoupons((prevCoupons) => [...prevCoupons, newCoupon]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>🎟 Coupon Generator App</Text>
      <Text style={styles.subHeader}>
        Welcome to your Coupon Center! Explore exciting offers below 👇
      </Text>

      {/* Coupon Display Section */}
      <View style={styles.section}>
        <CouponDisplay coupons={coupons} />
      </View>

      {/* Coupon Data Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💾 Coupon Data</Text>
        <CouponData onAddCoupon={handleAddCoupon} />
      </View>

      {/* Future Feature: Random Coupon Generator */}
      <View style={styles.section}>
        <Text style={styles.infoText}>
          🚧 Random Coupon Generator feature (by Priyanka) coming soon! 🚀
        </Text>
        {/* <RandomCouponGenerator /> */}
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Developed by Team Ninja – Epsilon 💪</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F8FF",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E88E5",
    marginBottom: 10,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    width: "100%",
    marginVertical: 15,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 10,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  footer: {
    fontSize: 14,
    color: "#777",
    marginTop: 20,
    textAlign: "center",
  },
});
