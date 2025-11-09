import React, { createContext, useState, useContext } from 'react';import React, { createContext, useContext, useState } from "react";



export const CouponContext = createContext();const CouponContext = createContext();



export const CouponProvider = ({ children }) => {export const CouponProvider = ({ children }) => {

  const [generatedCoupon, setGeneratedCoupon] = useState(null);  const [coupons, setCoupons] = useState([

  const [couponHistory, setCouponHistory] = useState([]);    { code: "SAVE10", discount: 10 },

    { code: "WELCOME20", discount: 20 },

  const addToCouponHistory = (coupon) => {    { code: "FREESHIP", discount: 0 },

    setCouponHistory((prevHistory) => [...prevHistory, coupon]);  ]);

  };

  const addCoupon = (newCoupon) => {

  const value = {    setCoupons((prev) => [...prev, newCoupon]);

    generatedCoupon,  };

    setGeneratedCoupon,

    couponHistory,  const removeCoupon = (code) => {

    addToCouponHistory,    setCoupons((prev) => prev.filter((c) => c.code !== code));

  };  };



  return (  return (

    <CouponContext.Provider value={value}>    <CouponContext.Provider value={{ coupons, addCoupon, removeCoupon }}>

      {children}      {children}

    </CouponContext.Provider>    </CouponContext.Provider>

  );  );

};};



export const useCouponContext = () => {export const useCoupons = () => useContext(CouponContext);

  const context = useContext(CouponContext);
  if (!context) {
    throw new Error('useCouponContext must be used within a CouponProvider');
  }
  return context;
};