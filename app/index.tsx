import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CouponData from "../app-example/components/CouponData";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🎟 Coupon Generator App</Text>
      <Text style={styles.subHeader}>Welcome to your Coupon Center!</Text>

      {/* Display Coupon Data */}
      <View style={styles.section}>
        <CouponData />
      </View>

      {/* Placeholder for future RandomCouponGenerator component */}
      <View style={styles.section}>
        <Text style={styles.infoText}>
          Random Coupon Generator feature coming soon! 
        </Text>
      </View>

      <Text style={styles.footer}>Developed by Team Ninja - Epsilon </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F7FA",
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
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  footer: {
    fontSize: 14,
    color: "#999",
    marginTop: 20,
    textAlign: "center",
  },
});
