import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CouponData from "./_components/CouponData";
import RandomCouponGenerator from "./_components/RandomCouponGenerator";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🎟 Coupon Generator App</Text>
      <Text style={styles.subHeader}>Welcome to your Coupon Center!</Text>

      {/* Random Coupon Generator Section */}
      <View style={styles.section}>
        <RandomCouponGenerator />
      </View>

      {/* Coupon Data Section */}
      <View style={styles.section}>
        <CouponData />
      </View>

      <Text style={styles.footer}>Developed by Team Ninja - Epsilon</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F4F8",
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E88E5",
    marginBottom: 10,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 16,
    color: "#555",
    marginBottom: 25,
    textAlign: "center",
  },
  section: {
    width: "100%",
    marginVertical: 15,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  footer: {
    fontSize: 14,
    color: "#888",
    marginTop: 25,
    textAlign: "center",
  },
});
