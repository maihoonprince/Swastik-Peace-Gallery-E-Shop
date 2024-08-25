import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categoeies, setCategories] = useState();
  const [peoducts, setProducts] = useState();

  return (
    <Context.Provider
      value={{
        categoeies,
        setCategories,
        peoducts,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
