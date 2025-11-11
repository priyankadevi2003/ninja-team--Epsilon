import React, { createContext, useContext, useState } from "react";

interface Coupon {
  code: string;
  discount: string;
  status: string;
  redeemed?: boolean;
}

interface CouponContextType {
  coupons: Coupon[];
  addCoupon: (coupon: Coupon) => void;
  redeemCoupon: (code: string) => void;
}

const defaultCoupons: Coupon[] = [
  { code: "SAVE10", discount: "10", status: "✅ Valid", redeemed: false },
  { code: "WELCOME20", discount: "20", status: "✅ Valid", redeemed: false },
  { code: "FREESHIP", discount: "0", status: "✅ Valid - Free Shipping", redeemed: false },
];

export const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const CouponProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coupons, setCoupons] = useState<Coupon[]>(defaultCoupons);

  const addCoupon = (coupon: Coupon) => {
    setCoupons((prev) => [...prev, coupon]);
  };

  const redeemCoupon = (code: string) => {
    setCoupons((prev) =>
      prev.map((coupon) =>
        coupon.code === code
          ? { ...coupon, redeemed: true, status: "✅ Redeemed" }
          : coupon
      )
    );
  };

  return (
    <CouponContext.Provider value={{ coupons, addCoupon, redeemCoupon }}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCouponContext = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error("useCouponContext must be used within a CouponProvider");
  }
  return context;
};
