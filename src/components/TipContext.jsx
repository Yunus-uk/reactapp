import { createContext, useState } from "react";

export const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <TipContext.Provider value={{ tipAmount, setTipAmount, totalAmount, setTotalAmount }}>
      {children}
    </TipContext.Provider>
  );
};

