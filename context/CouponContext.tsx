import React, { createContext, useState, useContext } from 'react';

interface Coupon {
  code: string;
  discount: number;
}

interface CouponContextType {
  generatedCoupon: Coupon | null;
  setGeneratedCoupon: React.Dispatch<React.SetStateAction<Coupon | null>>;
  couponHistory: Coupon[];
  addToCouponHistory: (coupon: Coupon) => void;
}

export const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const CouponProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [generatedCoupon, setGeneratedCoupon] = useState<Coupon | null>(null);
  const [couponHistory, setCouponHistory] = useState<Coupon[]>([]);

  const addToCouponHistory = (coupon: Coupon) => {
    setCouponHistory((prevHistory) => [...prevHistory, coupon]);
  };

  const value = {
    generatedCoupon,
    setGeneratedCoupon,
    couponHistory,
    addToCouponHistory,
  };

  return (
    <CouponContext.Provider value={value}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCouponContext = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error('useCouponContext must be used within a CouponProvider');
  }
  return context;
};