import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

interface Coupon {
  code: string;
  discount: string;
  status: string;
}

interface CouponDataProps {
  onAddCoupon: (coupon: Coupon) => void;
}

export default function CouponData({ onAddCoupon }: CouponDataProps) {
  const [discount, setDiscount] = useState("");
  const [code, setCode] = useState("");

  // Generate random coupon code
  const generateRandomCode = () => {
    const randomCode =
      "CPN-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setCode(randomCode);
  };

  // Add coupon and pass to parent
  const addCoupon = () => {
    if (!code || !discount) {
      alert("⚠ Please generate a code and enter discount");
      return;
    }

    const newCoupon = {
      code,
      discount,
      status: "✅ Valid",
    };

    if (onAddCoupon) {
      onAddCoupon(newCoupon);
    }

    setCode("");
    setDiscount("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.header}>🎟 Generate Coupons</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter discount percentage (e.g. 10)"
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
        placeholderTextColor="#777"
      />

      <TouchableOpacity style={styles.buttonBlue} onPress={generateRandomCode}>
        <Text style={styles.buttonText}>Generate Random Code</Text>
      </TouchableOpacity>

      {code ? (
        <Text style={styles.generatedCode}>Generated Code: {code}</Text>
      ) : null}

      <TouchableOpacity style={styles.buttonGreen} onPress={addCoupon}>
        <Text style={styles.buttonText}>Add Coupon</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E88E5",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },
  generatedCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#43A047",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonBlue: {
    backgroundColor: "#1E88E5",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonGreen: {
    backgroundColor: "#43A047",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});