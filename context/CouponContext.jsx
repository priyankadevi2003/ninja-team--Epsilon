import React, { createContext, useContext, useState } from "react";

const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useState([
    { code: "SAVE10", discount: 10 },
    { code: "WELCOME20", discount: 20 },
    { code: "FREESHIP", discount: 0 },
  ]);

  const addCoupon = (newCoupon) => {
    setCoupons((prev) => [...prev, newCoupon]);
  };

  const removeCoupon = (code) => {
    setCoupons((prev) => prev.filter((c) => c.code !== code));
  };

  return (
    <CouponContext.Provider value={{ coupons, addCoupon, removeCoupon }}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCoupons = () => useContext(CouponContext);
