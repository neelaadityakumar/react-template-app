import React, { createContext, useState, useContext, useCallback } from "react";

const TestContext = createContext();

export const useTest = () => useContext(TestContext);

export default function TestProvider({ children }) {
  const [tests, setTests] = useState([]);

  const addtest = useCallback(() => {
    const id = Math.random().toString(36).substring(2, 11);

    setTests((prev) => [...prev, { id }]);

    setTimeout(() => {
      removetest(id);
    }, 2000);
  }, []);

  const removetest = useCallback((id) => {
    setTests((prev) => prev.filter((test) => test.id !== id));
  }, []);

  return (
    <TestContext.Provider value={{ addtest, removetest, tests }}>
      {children}
    </TestContext.Provider>
  );
}
